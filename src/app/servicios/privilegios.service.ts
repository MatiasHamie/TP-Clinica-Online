import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './usuarios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PrivilegiosService {

  constructor(private firestore: AngularFirestore,
    private afAuth: AuthService) { }

  //Crea un nuevo usuario
  public crearUser(data: { email: string, tipo: string }) {
    return this.firestore.collection('usuarios-clinica').add(data);
  }
  //Obtiene un usuario
  public traerUsuario(documentId: string) {
    return this.firestore.collection('usuarios-clinica').doc(documentId).snapshotChanges();
  }
  //Obtiene todos los usuarios
  public traerUsuarios() {
    return this.firestore.collection('usuarios-clinica').snapshotChanges();
  }
  //Actualiza un usuario
  public actualizarUsuario(documentId: string, data: any) {
    return this.firestore.collection('usuarios-clinica').doc(documentId).set(data);
  }
}
