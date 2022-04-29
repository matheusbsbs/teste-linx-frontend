import { Produto } from './../produto.model';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  produto: Produto;

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute  
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.produtosService.readById(id).subscribe(produto => {
      this.produto = produto
    });
  }

  deleteProduto(): void {
    this.produtosService.delete(this.produto.id).subscribe(() => {
      this.produtosService.showMessage('Produto excluído com sucesso!')
      this.router.navigate(['/produtos'])
    })
  }
  cancelProduto(): void {
    this.router.navigate(['/produtos'])
  }

}
