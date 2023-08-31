// cadastro.component.ts
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
  public feedbackMessage?: string;


  constructor(
    private firestoreDataService: FirestoreDataService,
    private authService: AuthService
  ) {}

  onUserTypeChange(): void {
    this.userData = {}; // Reset any data when the user type changes
  }

  async onSignUp(form: NgForm) {
    try {
      if (!this.userData.email.split('@')[0].match(/^[A-Za-z0-9_.]+$/) || 
          !this.userData.password.match(/^[A-Za-z0-9_.@]+$/)) {
        this.feedbackMessage = "Erro, por favor preencha todos os campos corretamente!";
        return;
      }
      
      // Verifique se a data de nascimento é válida
      const birthYear = new Date(this.userData.dataNascimento).getFullYear();
      if (birthYear >= 2010) {
        this.feedbackMessage = "Erro, apenas usuários com idade acima de 13 anos são permitidos!";
        return;
      }
      
      // Autenticação no FirebaseAuth
      await this.authService.signUp(this.userData.email, this.userData.password);
  
      // Criação do usuário ou jornalista no Firestore
      if (this.userType === 'usuario') {
        await this.firestoreDataService.createUser(form.value);
      } else if (this.userType === 'jornalista') {
        await this.firestoreDataService.createJournalist(form.value);
      }
      
      this.feedbackMessage = "Cadastro efetuado com sucesso!";
    } catch (error) {
      console.error("Erro ao registrar:", error);
      this.feedbackMessage = "Erro, por favor preencha todos os campos corretamente!";
    }
  }
  
  
}
