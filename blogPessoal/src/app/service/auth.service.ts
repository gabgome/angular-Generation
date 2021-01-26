import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  //Método de login do usuário - importando do component UserLogin 
  logar(userLogin: UserLogin) {
    return this.http.post('http://localhost:8080/usuarios/logar', userLogin)
  }
  //Método de cadastrar usuário - importando do component Usuario
  cadastrar(user: Usuario) {
    return this.http.post('http://localhost:8080/usuarios/cadastrar', user)
  }

  btnSair() {
    let ok = false
    let token = environment.token

    if(token != ''){
      ok = true
    }

    return ok
  }

  btnLogin() {
    let ok = false
    let token = environment.token 
    
    if(token == ''){
      ok = true
    }

    return ok
  }
}
