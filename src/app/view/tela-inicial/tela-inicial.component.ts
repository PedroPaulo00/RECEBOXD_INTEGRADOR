import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent {
  sports = [
    { name: 'Futebol', image: 'assets/images/futebol-image.jpg', route: '/futebol' },
    { name: 'Tenis', image: 'assets/images/tenis-image.jpg', route: '/tenis' },
    { name: 'Baseball', image: 'assets/images/baseball-image.jpg', route: '/baseball' },
    { name: 'Basquete', image: 'assets/images/basquete-image.jpg', route: '/basquete' }
  ];

  constructor(private router: Router, private authService: AuthService) {}

  navigateToSport(route: string): void {
    this.router.navigate([route]);
  }
  

  onLogout(): void {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    }).catch(error => {
      console.error('Erro ao deslogar', error);
    });
  }


  
}
