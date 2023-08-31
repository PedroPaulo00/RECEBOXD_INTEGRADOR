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
  
  createChampionshipInSport(sport: string, data: any): Promise<void> {
    // Gere um ID aleatório e adicione o documento usando esse ID.
    const randomId = this.generateRandomId();
    return this.firestore.collection(sport).doc(randomId).set(data);
  }
  
  generateRandomId(length = 20): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  

getChampionshipsBySport(sport: string) {
  return this.firestore.collection(sport).snapshotChanges();
}

getChampionshipById(sport: string, id: string) {
  return this.firestore.collection(sport).doc(id).get();
}




  //... adicione mais métodos conforme necessário
}
