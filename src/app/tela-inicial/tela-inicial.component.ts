import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent implements OnInit {

  // Adicionando a propriedade userData
  userData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Código que você deseja executar quando o componente for inicializado
  }

  onSignIn() {
    console.log("Tentativa de login com", this.userData.email);
    this.authService.signIn(this.userData.email, this.userData.password);
  }
  

  // Adicione aqui quaisquer métodos ou lógicas adicionais que você precisará
}
