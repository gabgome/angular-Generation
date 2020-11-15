import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key = 'data'
  reverse = true  /*Faz com que o último item do array vá para o início da fila*/
  
  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  titulo: string

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  nomeTema: string

  /*Injeção de dependências do 'service'*/
  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    private alert: AlertasService,
    private router: Router
  ) { }

  ngOnInit() {
    /*Os parâmetros representam x e y. Quando iniciar o componente feed, a página deve ser exibida a partir 
    do topo (começo da página)*/
    window.scroll(0, 0) 
    /*Trás os métodos automaticamente assim que a página é renderizada (exibe o conteúdo na tela do navegador) se tiver um token*/
    this.findAllPostagens()
    this.findAllTemas()

  } 

  /*Descrição: chama no 'service' o método, transforma o JSON recebido em um objeto através do 'subscribe' 
  e insere na variável criada 'listaPostagens'. No 'postagem.service' é feito o contato com o back-end através do link do 'localhost'
  inserindo um 'token' para permitir o acesso do usuário logado a qualquer endpoint*/
  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  publicar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    /*Validação dos campos*/
    if (this.postagem.titulo == null || this.postagem.texto == null || this.postagem.tema == null) {
      this.alert.showAlertDanger ('Preencha todos os campos antes de publicar!')
    } else { 
        this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
          this.postagem = resp
          this.postagem = new Postagem()
          this.alert.showAlertSuccess ('Postagem realizada com sucesso!')
          this.findAllPostagens() /*Lista novamente as postagens depois de publicar uma nova*/
      })
    }
  }

  /*Busca por todos os temas: recebe um array (lista) de todos os temas cadastrados. 
  O mesmo acontece com o método de Postagens*/
  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }
  
  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  } 

  findByTituloPostagem() {
    if(this.titulo === '') {
      this.findAllPostagens()
    } else {
      this.postagemService.getByTituloPostagem(this.titulo).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }
  }

  findByNomeTema() {
    if(this.nomeTema === '') {
      this.findAllTemas()
    } else {
      this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[]) => {
        this.listaTemas = resp
      })
    }
  }




}
