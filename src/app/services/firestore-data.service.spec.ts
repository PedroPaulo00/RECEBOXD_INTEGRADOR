import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDataService {

  constructor(private firestore: AngularFirestore) { }

  // Para criar um novo usuário
  createUser(data: any): Promise<any> {
    return this.firestore.collection('users').add(data);
  }

  createJournalist(data: any): Promise<any> {
    return this.firestore.collection('journalists').add(data);
  }
  

  // Para criar um novo campeonato
  createChampionship(data: any): Promise<any> {
    return this.firestore.collection('championships').add(data);
  }

  // Para obter todos os campeonatos
  getChampionships(): any {
    return this.firestore.collection('championships').snapshotChanges();
  }

  //... adicione mais métodos conforme necessário
}
