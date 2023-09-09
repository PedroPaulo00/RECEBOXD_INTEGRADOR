import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../../auth.service";
import { NgForm } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { of, switchMap } from "rxjs";

// noticia.component.ts
@Component({
  selector: 'app-tenis-noticias',
  templateUrl: './tenis-noticias.component.html',
  styleUrls: ['./tenis-noticias.component.scss']
})
export class TenisNoticiasComponent implements OnInit {
  currentUser: any = null;
  noticias: any[] = [];
  editingNoticia: any = null;
  noticiaFormModel: any = {};

  constructor(private authService: AuthService, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.authService.getUserData().pipe(
      switchMap(userData => {
        this.currentUser = userData;
        if (this.currentUser?.userType === 'usuario' || this.currentUser?.userType === 'jornalista') {
          return this.authService.getNoticias();
        } else {
          return of(null);
        }
      })
    ).subscribe(noticiasData => {
      if (noticiasData) {
        this.noticias = noticiasData;
      }
    });
  }
  
  postNoticia(form: NgForm): void {
    if (this.currentUser?.userType === 'jornalista') {
      if (form.valid) {
        const noticiaData = form.value;

        if (this.editingNoticia) {
          this.firestore.collection('noticias').doc(this.editingNoticia.id).update(noticiaData)
            .then(() => {
              console.log('Notícia editada com sucesso!');
              this.editingNoticia = null;
              this.noticiaFormModel = {}; // Reset the form model
              form.reset();
            })
            .catch(error => {
              console.error('Erro ao editar notícia:', error);
            });
        } else {
          this.firestore.collection('noticias').add(noticiaData)
            .then(() => {
              console.log('Notícia postada com sucesso!');
              this.noticiaFormModel = {}; // Reset the form model
              form.reset();
            })
            .catch(error => {
              console.error('Erro ao postar notícia:', error);
            });
        }
      }
    }
  }

  editNoticia(noticia: any): void {
    this.editingNoticia = noticia;
    this.noticiaFormModel = { ...noticia }; // Inicialize o modelo do formulário com os valores da notícia
  }  

  deleteNoticia(noticiaId: string): void {
    this.firestore.collection('noticias').doc(noticiaId).delete()
      .then(() => {
        console.log('Notícia excluída com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao excluir notícia:', error);
      });
  }  
}
