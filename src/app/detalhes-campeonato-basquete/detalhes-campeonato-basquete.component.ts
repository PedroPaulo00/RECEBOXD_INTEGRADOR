import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreDataService } from '../firestore-data.service';

interface Championship {
  id?: string;
  name: string;
  esporte: string;
  logo1?: string;
  logo2?: string;
}

@Component({
  selector: 'app-detalhes-campeonato-basquete',
  templateUrl: './detalhes-campeonato-basquete.component.html',
  styleUrls: ['./detalhes-campeonato-basquete.component.scss']
})

export class DetalhesCampeonatoBasqueteComponent implements OnInit {
  championship: Championship | null = null;

  constructor(
    private firestoreDataService: FirestoreDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.firestoreDataService.getChampionshipById('basquete', id).subscribe(
        data => {
          if(data.exists) {
            this.championship = { id, ...data.data() as Championship };
          } else {
            // O documento não foi encontrado
            console.error("Documento não encontrado");
          }
        },
        error => {
          console.error("Erro ao buscar detalhes do campeonato:", error);
        }
      );
    }
  }
  
  
}
