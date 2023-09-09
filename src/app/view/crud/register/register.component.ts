import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage: string | null = null;

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      if(form.value.password !== form.value.confirmPassword) {
        this.errorMessage = "As senhas não coincidem";
        return;
      }

      this.authService.register(form.value)
        .then(response => {
          console.log('Registration successful!', response);
          this.errorMessage = null;
        })
        .catch(error => {
          console.error('Registration failed', error);
          this.errorMessage = "O registro falhou";
        });
    } else {
      this.errorMessage = "Formulário inválido";
    }
  }

  onLogin(): void {
    this.router.navigate(['/login']);
  }
}
