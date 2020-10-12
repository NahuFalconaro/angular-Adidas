import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[]  =[
     {
        name : 'Buzo AGCLI',
        type : 'Indumentaria',
        price : 3800,
        stock : 12,
        image: 'assets/img/buzo1.jpg',
        clearance: false,
      },
      {
        name : 'Zapatillas AIR force',
        type : 'Calzado',
        price : 9500,
        stock : 15,
        image: 'assets/img/AirForce.jpg',
        clearance: true,//Agregar coma en el u8ltimo, para que en git no se recambie esta linea, ahorra tiempo y espacio
      },
      {
        name : 'Remera retro',
        type : 'Indumentaria',
        price : 1900,
        stock : 0,
        image: 'assets/img/RemeraRetro.jpg',
        clearance: false,
      },
      {
        name : 'Buzo Gris',
        type : 'Indumentaria',
        price : 4300,
        stock : 8,
        image: 'assets/img/BuzoGris.jpg',
        clearance: false,
      }
  ];
  constructor() { }
  
  ngOnInit(): void {
  }
  
}
