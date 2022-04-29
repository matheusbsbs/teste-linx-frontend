import { Component, OnInit } from '@angular/core';
import {ItemsVenda, Venda} from "../venda.model";
import {VendaService} from "../venda.service";
import {Router} from "@angular/router";
import {ProdutosService} from "../../produto/produto.service";
import {Produto} from "../../produto/produto.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {ShoppingCartService} from "../ShoppingCartService";

@Component({
  selector: 'app-pedido-create',
  templateUrl: './venda-create.component.html',
  styleUrls: ['./venda-create.component.css']
})
export class VendaCreateComponent implements OnInit {

  selectedItem: Produto;
  items: Produto[];
  cartItem: FormGroup;
  produtos:Produto[];
  venda :Venda={


  }

  displayedColumns = ['id', 'nome', 'descricao', 'preco','action']
  constructor(private vendaService: VendaService,
              private produtosService: ProdutosService,
              private shoppingCartService: ShoppingCartService,

              ) { }

  ngOnInit(): void {
    this.produtosService.read().subscribe(produtos => {
      this.produtos = produtos
      console.log(produtos)
    });
    this.cartItem =  new FormGroup({
      name: new FormControl(null, [Validators.required]),
      price: new FormControl(null),
      quantity: new FormControl(null, [Validators.required, Validators.min(1)]),
    });
  }
    changeSelection(item) {
      this.items.push(item);
      console.log(this.items)
    }
  addCartItem() {
    const cartItem = this.cartItem.value;
    cartItem.price = this.selectedItem.preco;
    this.shoppingCartService.addCartItems(cartItem);
    this.cartItem.reset();
    this.selectedItem = null;
  }




}

