import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }
  //Autoriza o usuário a fazer requisições
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  //Método que retorna todos os temas cadastrados
  getAllTemas() {
    return this.http.get('http://localhost:8080/tema', this.token)
  }
  //Método que busca um tema através do id
  getByIdTema(id: number) {
    return this.http.get(`http://localhost:8080/tema/${id}`, this.token)
  }
  //Método que cria um novo tema
  postTema(tema: Tema) {
    return this.http.post('http://localhost:8080/tema', tema, this.token)
  }
  //Método que atualiza um tema existente
  putTema(tema: Tema) {
    return this.http.put('http://localhost:8080/tema', tema, this.token)
  }
  //Método que deleta um tema através do id
  deleteTema(id: number) {
    return this.http.delete(`http://localhost:8080/tema/${id}`, this.token)
  }
  //Método que busca um tema pelo nome
  getByNomeTema(nome: string) {
    return this.http.get(`http://localhost:8080/tema/nome/${nome}`, this.token)
  }
}
