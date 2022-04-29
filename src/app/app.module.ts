import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HomeComponent } from './views/home/home.component';



import { ProdutoComponent } from './views/produto/produto.component';
import { ProdutoReadComponent } from './components/produto/produto-read/produto-read.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/produto/produto-delete/produto-delete.component';
import { ProdutoTesteReadComponent } from './components/produto/produto-teste-read/produto-teste-read.component';
import { PedidoComponent } from './views/pedido/pedido.component';
import { VendaReadComponent } from './components/venda/venda-read/venda-read.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { VendaCreateComponent } from './components/venda/venda-create/venda-create.component';
import { PedidoUpdateComponent } from './components/venda/venda-update/pedido-update.component';
import {ListCartItemsComponent} from "./components/venda/produto-cart-items/list-cart-items.component";
import {MatSelectModule} from "@angular/material/select";



registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
     ProdutoComponent,
    ProdutoCreateComponent,
    ProdutoReadComponent,
    ProdutoUpdateComponent,
    ProdutoDeleteComponent,
    ProdutoTesteReadComponent,
    RedDirective,
    ForDirective,
    PedidoComponent,
    VendaReadComponent,
    VendaCreateComponent,
    PedidoUpdateComponent,
    ListCartItemsComponent


  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        ReactiveFormsModule,
        MatSelectModule
    ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
