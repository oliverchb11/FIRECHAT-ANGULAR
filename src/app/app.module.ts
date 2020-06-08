import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//modulo de formularios
import { FormsModule } from '@angular/forms';

//database y autenticaciones con fire base
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
//modulo de fire base con su envairoment
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
//rutas de la aplicacion
import { AppRoutingModule } from './app-routing.module';
//componentes de la aplicacion
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
