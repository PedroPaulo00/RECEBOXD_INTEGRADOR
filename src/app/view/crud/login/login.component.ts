import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage: string | null = null;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const { email, password } = form.value;
      this.authService.login(email, password)
        .then(() => {
          this.errorMessage = '';  // Agora, atribuímos uma string vazia em vez de null
          this.router.navigate(['/tela-inicial']); // 3. Redirecione para "tela-inicial"
          // Aqui, você pode redirecionar o usuário para outra página ou fazer outras ações necessárias
        })
        .catch(error => {
          this.errorMessage = "O login falhou";
          console.error('Login failed', error);
        });
    } else {
      this.errorMessage = "Formulário inválido";
    }
  }

  onRegister(): void {
    this.router.navigate(['/register']);
  }
}