import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0) /*Os parâmetros representam x e y*/
  } /*Quando iniciar o componente feed, a página deve ser exibida a partir do topo (começo da página)*/

}
