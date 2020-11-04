import { Postagem } from './Postagem' //Array de postagens da model 

export class Tema {
    public id: number //Todo tipo que for número (long, bigint, int...) é declarado como 'number' no TypeScript
    public descricao: string
    public postagem: Postagem[] //Chave estrangeira de Postagem. Por ser uma lista, declaramos como um array []
}