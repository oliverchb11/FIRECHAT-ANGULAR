import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path:'chat',component:ChatComponent,

},
{
path:'login',component:LoginComponent,
},
{
  path:'**' ,pathMatch:'full', redirectTo:'chat'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
