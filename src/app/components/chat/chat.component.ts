import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
mensaje:string = '';
elemento:any;
  constructor(private chatservice:ChatService) {
    this.chatservice.cargarMensajes$().subscribe(()=>{

      setTimeout(()=>{
        this.elemento.scrollTop = this.elemento.scrollHeight;
      },20)

    });
   }

  ngOnInit(): void {
    this.elemento = document.getElementById('app-mensajes');


  }
  enviar_mensaje() {
    if (this.mensaje.length === 0) {
        return;
    } else {
      this.chatservice.agregarMensaje$(this.mensaje).then(()=>{
        console.log('mensaje enviado');
        this.mensaje = '';
      }).catch((err)=>{
        console.log('error al enviar mensaje a fire base');
      })
    }


  }
}
