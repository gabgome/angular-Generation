import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';

/*path - nome da rota*/
const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full' }, /*Quando a rota estiver vazia, redireciona para a Home*/
  { path: 'home', component: HomeComponent }, /*Direciona para a página home*/
  { path: 'feed', component: FeedComponent }, /*Direciona para a página feed*/
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro-tema', component: PostTemaComponent },
  { path: 'editar-post/:id', component: PutPostagemComponent }, /*Recebe o id como parâmetro para poder editar através dele*/
  { path: 'delete-post/:id', component: DeletePostagemComponent }, /*Deleta através do id*/
  { path: 'editar-tema/:id', component: PutTemaComponent },
  { path: 'delete-tema/:id', component: DeleteTemaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


