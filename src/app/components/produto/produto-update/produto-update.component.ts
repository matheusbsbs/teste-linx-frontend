import { Produto } from './../produto.model';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {

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

  updateProduto(): void {
    this.produtosService.update(this.produto).subscribe(() => {
      this.produtosService.showMessage('Produto atualizado com sucesso!')
      this.router.navigate(['/produtos'])
    })
  }
  cancelProduto(): void {
    this.router.navigate(['/produtos'])
  }
}
