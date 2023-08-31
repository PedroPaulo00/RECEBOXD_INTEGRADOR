import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  async signUp(email: string, password: string) {
    try {
      if (!email.split('@')[0].match(/^[A-Za-z0-9_.]+$/) || 
          !password.match(/^[A-Za-z0-9_.@]+$/)) {
        throw new Error("Invalid input");
      }
      
      console.log(`Registrando usuário com e-mail: ${email}`);
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log("Usuário registrado com sucesso!");
      this.router.navigate(['/']);
    } catch (error: any) {
      console.error("Erro durante signUp:", error);
      this.handleError(error);
    }
  }
  
  
  
  

  async signIn(email: string, password: string) {
    try {
      console.log("Chamando signInWithEmailAndPassword com", email, password);
      await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log("Autenticado com sucesso. Redirecionando...");
      this.router.navigate(['/esportes']);
    } catch (error: any) {
      console.error("Erro durante signInWithEmailAndPassword:", error);
      this.handleError(error);
    }
  }  

  async signOut() {
    try {
      await this.afAuth.signOut();
      this.router.navigate(['/login']); // Navegar para a página de login após o logout
    } catch (error: any) {
      console.error("Erro no logout:", error);
    }
  }

  private handleError(error: any) {
    let errorMessage: string;
    const errorMessages: { [key: string]: string } = {
      'auth/email-already-in-use': "Este email já está em uso.",
      'auth/invalid-email': "Email inválido.",
      // ... adicione outros códigos de erro conforme necessário
    };

    if ('code' in error) {
      errorMessage = errorMessages[error.code] || "Ocorreu um erro desconhecido.";
    } else {
      errorMessage = "Erro desconhecido: " + JSON.stringify(error);
    }

    // Mostre a mensagem de erro para o usuário
    console.error(errorMessage);
  }
  
}
