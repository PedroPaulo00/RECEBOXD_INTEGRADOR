import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EsportesComponent } from './esportes/esportes.component';
import { FutebolComponent } from './futebol/futebol.component';
import { BasqueteComponent } from './basquete/basquete.component';
import { TenisComponent } from './tenis/tenis.component';
import { BaseballComponent } from './baseball/baseball.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AppComponent } from './app.component';
import { DetalhesCampeonatoBaseballComponent } from './detalhes-campeonato-baseball/detalhes-campeonato-baseball.component';
import { DetalhesCampeonatoComponent } from './detalhes-campeonato/detalhes-campeonato.component';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DetalhesCampeonatoBasqueteComponent } from './detalhes-campeonato-basquete/detalhes-campeonato-basquete.component';
import { DetalhesCampeonatoTenisComponent } from './detalhes-campeonato-tenis/detalhes-campeonato-tenis.component';

const routes: Routes = [
  { path: '', component: TelaInicialComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'esportes', component: EsportesComponent },
  { path: 'futebol', component: FutebolComponent },
  { path: 'detalhes-campeonato/:id', component: DetalhesCampeonatoComponent },
  { path: 'basquete', component: BasqueteComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'detalhes-campeonato-basquete/:id', component: DetalhesCampeonatoBasqueteComponent },
  { path: 'tenis', component: TenisComponent },
  { path: 'detalhes-campeonato-tenis/:id', component: DetalhesCampeonatoTenisComponent },
  { path: 'baseball', component: BaseballComponent },
  { path: 'detalhes-campeonato-baseball/:id', component: DetalhesCampeonatoBaseballComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, RouterLink],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }