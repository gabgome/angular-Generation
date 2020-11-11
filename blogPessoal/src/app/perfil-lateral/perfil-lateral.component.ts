import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {
  // Declaração de variável no TS da forma abaixo:
  nome: string = 'Gabriela Gomes' 
  constructor() { }
  // Toda vez que um componente for carregado, faça alguma coisa
  ngOnInit() {
    

  }
}
