import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Registrar Produto',
      icon: 'storefront',
      routeUrl: '/produtos'
    }
  }

  ngOnInit(): void {
  }

  navigateToProdutoCreate(): void {
    this.router.navigate(['/produtos/create'])
  }
}
