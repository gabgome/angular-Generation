import { Tema } from './Tema'

export class Postagem {
    public id: number
    public titulo: string
    public texto: string
    public date: Date
    public tema: Tema 
}

//Tema não é um array. O relacionamento entre as tabelas foi de N-1 (uma postagem tem um tema e um tema tem várias postagens)