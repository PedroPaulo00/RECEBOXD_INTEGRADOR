import { Component } from '@angular/core';
import { FirestoreDataService } from '../firestore-data.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  public userType!: string;
  public userData: any = {};

  constructor(private firestoreDataService: FirestoreDataService,
    private authService : AuthService) { }

  onUserTypeChange(): void {
    this.userData = {}; // Reset any data when the user type changes
  }

  onSubmit(form: NgForm) {
    console.log('Function onSubmit was called with data:', form.value);
    if (this.userType === 'usuario') {
      this.firestoreDataService.createUser(form.value).then(() => {
        console.log('Usuário criado com sucesso!');
        // Redirecionar para a tela de login ou exibir uma mensagem de sucesso
      }).catch(error => {
        console.error("Erro ao criar documento: ", error);
      });
    } else if (this.userType === 'jornalista') {
      this.firestoreDataService.createJournalist(form.value).then(() => {
        console.log('Jornalista criado com sucesso!');
        // Limpar o formulário ou redirecionar
      }).catch(error => {
        console.error("Erro ao criar documento: ", error);
      });
    }
  }

  onFileChanged(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.userData.fotoDePerfil = file;
    }
  }

  submitForm(): void {
    // Here you would typically send this data to the backend
    console.log('User data to submit:', this.userData);
  }

  onSignUp() {
    this.authService.signUp(this.userData.email, this.userData.password);
  }
}
