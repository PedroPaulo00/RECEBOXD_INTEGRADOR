import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage: string | null = null;

  constructor(private authService: AuthService) { }

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
}
