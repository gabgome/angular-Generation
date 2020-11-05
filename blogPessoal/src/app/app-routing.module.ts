import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

/*path - nome da rota*/
const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full' }, /*Quando a rota estiver vazia, redireciona para a Home*/
  { path: 'home', component: HomeComponent }, /*Direciona para a página home*/
  { path: 'feed', component: FeedComponent }, /*Direciona para a página feed*/
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


