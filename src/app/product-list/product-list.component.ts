import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  product = {
    "name" : "Buzo AGCLI",
    "type" : "Indumentaria",
    "price" : 3800,
    "stock" : 12,
    "image": "assets/img/buzo1.jpg"

  }



  constructor() { }

  ngOnInit(): void {
  }

}
