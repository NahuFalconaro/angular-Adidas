import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
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
        quantity: 0,
      },
      {
        name : 'Zapatillas AIR force',
        type : 'Calzado',
        price : 9500,
        stock : 15,
        image: 'assets/img/AirForce.jpg',
        clearance: true,//Agregar coma en el u8ltimo, para que en git no se recambie esta linea, ahorra tiempo y espacio
        quantity: 0,
      },
      {
        name : 'Remera retro',
        type : 'Indumentaria',
        price : 1900,
        stock : 0,
        image: 'assets/img/RemeraRetro.jpg',
        clearance: false,
        quantity: 0,
      },
      {
        name : 'Buzo Gris',
        type : 'Indumentaria',
        price : 4300,
        stock : 3,
        image: 'assets/img/BuzoGris.jpg',
        clearance: false,
        quantity: 0,
      }
  ];

  
  constructor(private cart: ProductCartService) { 
  }
  
  addToCart(product): void {
    if(product.quantity != 0){
        this.cart.addToCart(product);// va al metodo de product-cart-service
        //una vez agregado, controla lo del stock y pone la cantidad a 0
        product.stock -= product.quantity;
        product.quantity = 0;
    }
  }
  ngOnInit(): void {
  }

  maxReached(mesage: string){
    alert(mesage);
  }

}