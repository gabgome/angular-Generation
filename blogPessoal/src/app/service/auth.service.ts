import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //http é o nome da variável, podendo ser qualquer outro nome
  constructor(private http: HttpClient) { }

  //Método de login do usuário - importando do component UserLogin 
  logar(userLogin: UserLogin) {
    return this.http.post('http://localhost:8080/usuarios/logar', userLogin)
  }
  //Método de cadastrar usuário - importando do component User
  cadastrar(user: User) {
    return this.http.post('http://localhost:8080/usuarios/cadastrar', user)
  }
}
