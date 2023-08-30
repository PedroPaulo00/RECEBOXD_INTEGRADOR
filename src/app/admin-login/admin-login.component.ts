import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  constructor(private router: Router) { }

  adminLogin(credentials: any) {
    // Aqui, por simplicidade, estamos apenas verificando credenciais estáticas.
    // Em um ambiente real, você iria consultar um backend para validar as credenciais.
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      // Redireciona para o painel de administração após login bem-sucedido.
      this.router.navigate(['/admin-panel']);
    } else {
      alert('Credenciais inválidas!');
    }
  }

}
