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
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.router.navigate(['/']); // Navegar para a página inicial após o cadastro bem-sucedido
    } catch (error) {
      console.error("Erro no cadastro:", error);
      // Aqui você pode tratar o erro de maneira mais amigável ao usuário
    }
  }

  async signIn(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/']); // Navegar para a página inicial após o login bem-sucedido
    } catch (error) {
      console.error("Erro no login:", error);
      // Aqui você pode tratar o erro de maneira mais amigável ao usuário
    }
  }

  async signOut() {
    try {
      await this.afAuth.signOut();
      this.router.navigate(['/login']); // Navegar para a página de login após o logout
    } catch (error) {
      console.error("Erro no logout:", error);
    }
  }

  catch (error: { code: string }) {
    let errorMessage: string;

    const errorMessages: { [key: string]: string } = {
        'auth/email-already-in-use': "Este email já está em uso.",
        'auth/invalid-email': "Email inválido.",
        // ... adicione outros códigos de erro conforme necessário
    };

    errorMessage = errorMessages[error.code] || "Ocorreu um erro desconhecido.";

    // Mostre a mensagem de erro para o usuário
    console.error(errorMessage); // Você pode mostrar a mensagem de erro para o usuário como quiser.
}

  
}
