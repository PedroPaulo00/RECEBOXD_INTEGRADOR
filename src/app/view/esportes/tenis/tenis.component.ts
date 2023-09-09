import { Component, OnInit } from '@angular/core';
import { FirestoreDataService } from 'src/app/firestore-data.service';
import { Match } from 'src/app/model/match.model';

@Component({
  selector: 'app-tenis',
  templateUrl: './tenis.component.html',
  styleUrls: ['./tenis.component.scss']
})
export class TenisComponentComponent implements OnInit {
  partidas: Match[] = [];
  filteredPartidas: { [key: string]: { [key: string]: Match[] } } = {};
  searchQuery: string = '';
  selectedPartida: Match | null = null;
  statuses: string[] = ['Evento Futuro', 'Ao-Vivo', 'Finalizado'];
  filterStatus: string = '';
  filterChampionship: string = '';

  constructor(private firestoreDataService: FirestoreDataService) { }

  ngOnInit(): void {
    this.fetchMatches();
  }

  fetchMatches(): void {
    this.firestoreDataService.getMatches().subscribe(matches => {
      this.partidas = matches.filter(match => match.sport === 'Tenis');
      this.filterPartidas();
    });
  }

  filterPartidas(): void {
    let filteredList = this.partidas
      .filter(partida => this.filterStatus ? partida.status === this.filterStatus : true)
      .filter(partida => this.filterChampionship ? partida.championshipName.toLowerCase().includes(this.filterChampionship.toLowerCase()) : true);

    if (this.searchQuery) {
      filteredList = filteredList.filter(partida => partida.championshipName.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }

    this.filteredPartidas = filteredList.reduce<{ [status: string]: { [championship: string]: Match[] } }>((acc, partida) => {
      if (!acc[partida.status]) {
        acc[partida.status] = {};
      }
      if (!acc[partida.status][partida.championshipName]) {
        acc[partida.status][partida.championshipName] = [];
      }
      acc[partida.status][partida.championshipName].push(partida);
      return acc;
    }, {});
    
  }

  get filteredPartidasKeys(): string[] {
    return Object.keys(this.filteredPartidas);
  }

  getChampionshipKeys(status: string): string[] {
    return Object.keys(this.filteredPartidas[status]);
  }

  onPartidaClick(partida: Match): void {
    this.selectedPartida = partida;
  }
}

