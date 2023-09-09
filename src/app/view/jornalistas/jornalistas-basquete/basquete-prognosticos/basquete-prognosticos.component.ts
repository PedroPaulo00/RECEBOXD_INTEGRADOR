import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../../auth.service";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { NgForm } from "@angular/forms";
import { of, switchMap } from "rxjs";

// prognostico.component.ts
@Component({
  selector: 'app-basquete-prognosticos',
  templateUrl: './basquete-prognosticos.component.html',
  styleUrls: ['./basquete-prognosticos.component.scss']
})
export class BasquetePrognosticosComponent implements OnInit {
  currentUser: any = null;
  prognosticos: any[] = [];
  editingPrognostico: any = null;
  prognosticoFormModel: any = {};

  constructor(private authService: AuthService, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.authService.getUserData().pipe(
      switchMap(userData => {
        this.currentUser = userData;
        if (this.currentUser?.userType === 'usuario' || this.currentUser?.userType === 'jornalista') {
          return this.authService.getPrognosticos();
        } else {
          return of(null);
        }
      })
    ).subscribe(prognosticosData => {
      if (prognosticosData) {
        this.prognosticos = prognosticosData;
      }
    });
  }
  
  postPrognostico(form: NgForm): void {
    if (this.currentUser?.userType === 'jornalista') {
      if (form.valid) {
        const prognosticoData = form.value;

        if (this.editingPrognostico) {
          this.firestore.collection('prognosticos').doc(this.editingPrognostico.id).update(prognosticoData)
            .then(() => {
              console.log('Prognóstico editada com sucesso!');
              this.editingPrognostico = null;
              this.prognosticoFormModel = {}; // Reset the form model
              form.reset();
            })
            .catch(error => {
              console.error('Erro ao editar prognóstico:', error);
            });
        } else {
          this.firestore.collection('prognosticos').add(prognosticoData)
            .then(() => {
              console.log('Prognóstico postada com sucesso!');
              this.prognosticoFormModel = {}; // Reset the form model
              form.reset();
            })
            .catch(error => {
              console.error('Erro ao postar prognóstico:', error);
            });
        }
      }
    }
  }

  editPrognostico(prognostico: any): void {
    this.editingPrognostico = prognostico;
    this.prognosticoFormModel = { ...prognostico };
  }  

  deletePrognostico(prognosticoId: string): void {
    this.firestore.collection('prognosticos').doc(prognosticoId).delete()
      .then(() => {
        console.log('Prognostico excluído com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao excluir prognostico:', error);
      });
  }  
}
