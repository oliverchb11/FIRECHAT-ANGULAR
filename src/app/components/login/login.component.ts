import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }
  ingresar(aplicacion:string){
    console.log(aplicacion);

    this.chatService.login(aplicacion);

  }

}
