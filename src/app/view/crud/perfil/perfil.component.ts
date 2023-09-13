import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreDataService } from 'src/app/services/firestore-data.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  userData: any = {};
  errorMessage: string | null = null;
  userNickname: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private firestoreDataService: FirestoreDataService,

  ) { }

  ngOnInit(): void {
    this.authService.getUserData().subscribe(
        data => {
            this.userData = data;
        },
        error => {
            console.error('Error fetching user data', error);
            this.errorMessage = 'Erro ao carregar os dados do usuário';
        }
    );
}

  
  onEdit(): void {
    if (this.userData) {
      // AQUI: Implemente a lógica para editar o perfil, assumindo que você tem um método em AuthService para atualizar os dados do usuário
      from(this.authService.updateUserProfile(this.userData)).subscribe(
        response => {
          console.log('Profile updated successfully!', response);
          this.router.navigate(['/tela-inicial']); 
        },
        error => {
          console.error('Failed to update profile', error);
          // ...
        }
      );
    } else {
      this.errorMessage = 'Dados do usuário não disponíveis';
    }
  }
  
  onDelete(): void {
    // AQUI: Implemente a lógica para excluir o perfil, assumindo que você tem um método em AuthService para excluir o usuário
    this.authService.deleteUser().subscribe(
      () => {
        this.errorMessage = null;
        // Redireciona para a tela inicial ou uma página de despedida
        this.router.navigate(['/tela-inicial']);
      },
      error => {
        this.errorMessage = 'Erro ao excluir o perfil';
        console.error('Erro ao excluir o perfil:', error);
      }
    );
  }
  
  onLogout(): void {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    }).catch(error => {
      console.error('Erro ao deslogar', error);
    });
  }

  navigateToProfile(): void {
    this.router.navigate(['/perfil']);
  }

  navigateToTelaInicial(): void {
    this.router.navigate(['/tela-inicial']);
  }
}
