import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './view/admin/admin-login/admin-login.component';
import { AdminCrudPartidasComponent } from './view/admin/admin-crud-partidas/admin-crud-partidas.component';
import { RegisterComponent } from './view/crud/register/register.component';
import { LoginComponent } from './view/crud/login/login.component';
import { TelaInicialComponent } from './view/tela-inicial/tela-inicial.component';
import { PerfilComponent } from './view/crud/perfil/perfil.component';
import { BaseballComponent } from './view/esportes/baseball/baseball.component';
import { FutebolComponent } from './view/esportes/futebol/futebol.component';
import { TenisComponentComponent } from './view/esportes/tenis/tenis.component';
import { BasqueteComponent } from './view/esportes/basquete/basquete.component';
import { BaseballNoticiasComponent } from './view/jornalistas/jornalistas-baseball/baseball-noticias/baseball-noticias.component';
import { BaseballPrognosticosComponent } from './view/jornalistas/jornalistas-baseball/baseball-prognosticos/baseball-prognosticos.component';
import { FutebolPrognosticosComponent } from './view/jornalistas/jornalistas-futebol/futebol-prognosticos/futebol-prognosticos.component';
import { FutebolNoticiasComponent } from './view/jornalistas/jornalistas-futebol/futebol-noticias/futebol-noticias.component';
import { TenisNoticiasComponent } from './view/jornalistas/jornalistas-tenis/tenis-noticias/tenis-noticias.component';
import { TenisPrognosticosComponent } from './view/jornalistas/jornalistas-tenis/tenis-prognosticos/tenis-prognosticos.component';
import { BasqueteNoticiasComponent } from './view/jornalistas/jornalistas-basquete/basquete-noticias/basquete-noticias.component';
import { BasquetePrognosticosComponent } from './view/jornalistas/jornalistas-basquete/basquete-prognosticos/basquete-prognosticos.component';


const routes: Routes = [
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-crud-partidas', component: AdminCrudPartidasComponent},
  { path: 'cadastro', component: RegisterComponent},
  { path: '', component : LoginComponent},
  { path: 'register', component : RegisterComponent},
  { path: 'tela-inicial', component : TelaInicialComponent},
  { path: 'perfil', component : PerfilComponent},
  { path: 'futebol', component: FutebolComponent },
  { path: 'tenis', component: TenisComponentComponent},
  { path: 'baseball', component: BaseballComponent },
  { path: 'basquete', component: BasqueteComponent },
  { path: 'baseball-noticias', component: BaseballNoticiasComponent },
  { path: 'baseball-prognosticos', component: BaseballPrognosticosComponent },
  { path: 'futebol-noticias', component: FutebolNoticiasComponent },
  { path: 'futebol-prognosticos', component: FutebolPrognosticosComponent },
  { path: 'tenis-noticias', component: TenisNoticiasComponent },
  { path: 'tenis-prognosticos', component: TenisPrognosticosComponent },
  { path: 'basquete-noticias', component: BasqueteNoticiasComponent },
  { path: 'basquete-prognosticos', component: BasquetePrognosticosComponent },
  { path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }