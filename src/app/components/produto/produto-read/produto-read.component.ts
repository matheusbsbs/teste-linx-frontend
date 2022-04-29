import { Produto } from './../produto.model';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produto.service';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {

  produtos: Produto[]
  displayedColumns = ['id', 'nome', 'descricao', 'preco', 'imgUrl', 'action']

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtosService.read().subscribe(produtos => {
      this.produtos = produtos
      console.log(produtos)
    })
  }
}
