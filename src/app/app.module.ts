import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EsportesComponent } from './esportes/esportes.component';
import { FutebolComponent } from './futebol/futebol.component';
import { BasqueteComponent } from './basquete/basquete.component';
import { TenisComponent } from './tenis/tenis.component';
import { BaseballComponent } from './baseball/baseball.component';
import { DetalhesCampeonatoBasqueteComponent } from './detalhes-campeonato-basquete/detalhes-campeonato-basquete.component';
import { DetalhesCampeonatoComponent } from './detalhes-campeonato/detalhes-campeonato.component';
import { DetalhesCampeonatoTenisComponent } from './detalhes-campeonato-tenis/detalhes-campeonato-tenis.component';
import { DetalhesCampeonatoBaseballComponent } from './detalhes-campeonato-baseball/detalhes-campeonato-baseball.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    CadastroComponent,
    EsportesComponent,
    FutebolComponent,
    BasqueteComponent,
    TenisComponent,
    BaseballComponent,
    DetalhesCampeonatoBasqueteComponent,
    DetalhesCampeonatoComponent,
    DetalhesCampeonatoTenisComponent,
    DetalhesCampeonatoBaseballComponent,
    AdminPanelComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NgModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule, 
    BrowserModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
