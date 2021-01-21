import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({ 
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }
  //Autoriza o usuário a fazer requisições
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  //Método que retorna todas as postagens cadastradas
  getAllPostagens() {
    return this.http.get('http://localhost:8080/postagens', this.token)
  }
  
  //Método que retorna uma postagem através do id
  getByIdPostagem(id:number) {
    return this.http.get(`http://localhost:8080/postagens/${id}`, this.token)
  }

  //Método para criar uma postagem
  postPostagem(postagem: Postagem) {
    return this.http.post('http://localhost:8080/postagens', postagem, this.token)
  }

  //Método que altera uma postagem
  putPostagem(postagem: Postagem) {
    return this.http.put('http://localhost:8080/postagens', postagem, this.token)
  }
  //Método que deleta uma postagem
  deletePostagem(id: number) {
    return this.http.delete(`http://localhost:8080/postagens/${id}`, this.token)
  }
  //Método que busca postagem por título
  getByTituloPostagem(titulo: string) {
    return this.http.get(`http://localhost:8080/postagens/titulo/${titulo}`, this.token)
  }
  
}
