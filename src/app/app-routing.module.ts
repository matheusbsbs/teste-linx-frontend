import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

import { ProdutoComponent } from './views/produto/produto.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ProdutoReadComponent } from './components/produto/produto-read/produto-read.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/produto/produto-delete/produto-delete.component';

import { PedidoComponent } from './views/pedido/pedido.component';
import { VendaReadComponent } from './components/venda/venda-read/venda-read.component';
import { VendaCreateComponent } from './components/venda/venda-create/venda-create.component';
import { PedidoUpdateComponent } from './components/venda/venda-update/pedido-update.component';




const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  {
    path: "produtos",
    component: ProdutoComponent
  },
  {
    path: "produtos/create",
    component: ProdutoCreateComponent
  },
  {
    path: "produtos/read/:id",
    component: ProdutoReadComponent
  },
  {
    path: "produtos/update/:id",
    component: ProdutoUpdateComponent
  },
  {
    path: "produtos/delete/:id",
    component: ProdutoDeleteComponent
  },
  {
    path: "pedidos",
    component: PedidoComponent
  },
  {
    path: "pedidos/create",
    component: VendaCreateComponent
  },
  {
    path: "pedidos/read/:id",
    component: VendaReadComponent
  },
  { 
    path: "pedidos/update/:id",
    component: PedidoUpdateComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
