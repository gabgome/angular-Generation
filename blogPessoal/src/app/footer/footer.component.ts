import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'/*Pacote de ícones*/
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  /*Variáveis que recebem os ícones*/
  faFacebook = faFacebook
  faInstagram = faInstagram
  faLinkedin = faLinkedin

  constructor() { }

  ngOnInit(): void {
  }

}
