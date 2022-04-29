import {Produto} from "../produto/produto.model";

export interface Venda {
    id?: number


}

export interface ItemsVenda {
    id?:number
    quantidade:number
    preco:number
    venda:Venda
    produto:Produto
}
