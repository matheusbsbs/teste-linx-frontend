import { Produto } from './../produto.model';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {
produtos:Produto[]
  despesasTotais:number
  margem:number;
  preco:number;
  rateioCustos:number


  produto: Produto = {
    nome: '',
    descricao: '',
    preco: null,
    imgUrl: '',
    custo: null,
    margem:null
  }

  constructor(private produtosService: ProdutosService,
    private router: Router) { }

  ngOnInit(): void {
  }

  calculoPreco(): void {
   this.listProdutos();
   if(this.produtos.length == 0) {
     this.rateioCustos = (Number(400)+ Number(this.produto.custo))
     this.margem = (this.produto.margem / 100)
     this.margem++
     this.preco =(this.rateioCustos * this.margem)
     this.produto.preco = this.preco
     this.saveProduto()
     this.margem = null
     this.preco =null
     this.despesasTotais =null
   }
   else {
     this.produtos.forEach((despesas) => {
       this.rateioCustos = (Number(despesas.custo) /Number(this.produtos.length))
       this.despesasTotais= (Number(this.rateioCustos)+Number(this.produto.custo))
       this.margem = (this.produto.margem / 100)
       this.margem++
       this.preco =(this.despesasTotais * this.margem)
       this.produto.preco = this.preco
       this.saveProduto()
       this.margem = null
       this.preco =null
       this.despesasTotais =null
     })
   }}

   saveProduto():void{
    this.produtosService.create(this.produto).subscribe(() => {
      this.produtosService.showMessage('Produto criado com sucesso!')
      this.router.navigate(['/produtos'])

    })}

  cancelProduto(): void {
    this.router.navigate(['/produtos'])
  }
  listProdutos(){
    this.produtosService.read().subscribe(produtos => {
      this.produtos = produtos})}}



