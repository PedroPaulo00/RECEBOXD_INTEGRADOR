import { Component } from '@angular/core';
import { FirestoreDataService } from '../firestore-data.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {

  constructor(private firestoreDataService: FirestoreDataService) { }

  createChampionship(championshipData: any) {
    // Vamos salvar o campeonato na coleção do esporte específico
    this.firestoreDataService.createChampionshipInSport(championshipData.sport, championshipData).then(() => {
      console.log('Campeonato criado com sucesso!');
    }).catch(error => {
      console.error("Erro ao criar campeonato: ", error);
    });
  }
  
}
