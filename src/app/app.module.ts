import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EsportesComponent } from './esportes/esportes.component';
import { BaseballComponent } from './baseball/baseball.component';
import { DetalhesCampeonatoBaseballComponent } from './detalhes-campeonato-baseball/detalhes-campeonato-baseball.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalhesCampeonatoComponent } from './detalhes-campeonato/detalhes-campeonato.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    CadastroComponent,
    EsportesComponent,
    BaseballComponent,
    DetalhesCampeonatoComponent,
    DetalhesCampeonatoBaseballComponent,
    AdminPanelComponent,
    AdminLoginComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
