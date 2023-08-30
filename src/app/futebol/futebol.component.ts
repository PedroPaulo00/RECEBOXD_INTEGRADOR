import { Component, OnInit } from '@angular/core';
import { FirestoreDataService } from '../firestore-data.service';

// Interface para os campeonatos
interface Championship {
  id?: string;
  name: string;
  esporte: string;
  logo1?: string;
  logo2?: string;
}

@Component({
  selector: 'app-futebol',
  templateUrl: './futebol.component.html',
  styleUrls: ['./futebol.component.scss']
})
export class FutebolComponent implements OnInit {
  championships: Championship[] = [];

  constructor(private firestoreDataService: FirestoreDataService) {}

  ngOnInit(): void {
    // Buscar campeonatos de baseball ao iniciar o componente.
    this.fetchChampionships();
  }

  fetchChampionships(): void {
    this.firestoreDataService.getChampionshipsBySport('futebol').subscribe(
      data => {
        this.championships = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as Championship
          };
        });
      },
      error => {
        console.error("Erro ao buscar os campeonatos de futebol:", error);
      }
    );   
  }
}
