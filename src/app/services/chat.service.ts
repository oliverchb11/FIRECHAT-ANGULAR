import { map } from 'rxjs/operators';
import { MensajeInterface } from './../interfaces/mensaje.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

 private itemsCollection: AngularFirestoreCollection<MensajeInterface>;
 public chats: MensajeInterface[] = [];
 public usuario :any ={};
  constructor(private  afs: AngularFirestore, public afAuth :AngularFireAuth) {

    this.afAuth.authState.subscribe((user)=>{

      if(!user){
        return;
      }
      else {
      console.log('usuario desde servicio',user);
      this.usuario.nombre = user.displayName;
      this.usuario.correo = user.email;
      this.usuario.uid = user.uid;
      console.log(this.usuario.uid);
    }
    });
   }

  cargarMensajes$(){
    this.itemsCollection = this.afs.collection<MensajeInterface>('chats', ref => ref.orderBy('fecha', 'desc').limit(5));
   return this.itemsCollection.valueChanges().pipe(map((mensaje)=>{
     console.log(mensaje);
     this.chats = [];
     for(let mensajes of mensaje){
       this.chats.unshift(mensajes);
     }

   }))
  }

  agregarMensaje$(texto:string){

    //TODO: falta el uid
    let mensaje :MensajeInterface ={
      nombre:'Oliver',
      mensaje:texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid,
    };
    return this.itemsCollection.add(mensaje);

  }

  login(aplicacion:string) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }


}
