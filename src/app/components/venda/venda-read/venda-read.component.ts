
import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import {Venda} from "../venda.model";

@Component({
  selector: 'app-pedido-read',
  templateUrl: './venda-read.component.html',
  styleUrls: ['./venda-read.component.css']
})
export class VendaReadComponent implements OnInit {

  vendas: Venda[]

  displayedColumns = ['id'  ]

  constructor(private vendaService: VendaService) { }

  ngOnInit(): void {
    this.vendaService.read().subscribe(vendas => {
      this.vendas = vendas
      console.log(vendas)
    })
  }
}
