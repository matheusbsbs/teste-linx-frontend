import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from  'src/app/components/template/header/header.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Registrar Pedido',
      icon: 'add_shopping_cart',
      routeUrl: '/pedidos'
    }
  }

  ngOnInit(): void {
  }

  navigateToPedidoCreate(): void {
    this.router.navigate(['/pedidos/create'])
  }

}
