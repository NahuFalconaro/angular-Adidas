import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-store-cart',
  templateUrl: './store-cart.component.html',
  styleUrls: ['./store-cart.component.scss']
})
export class StoreCartComponent implements OnInit {

  cartList$: Observable<Product[]>;

  constructor(private cart: ProductCartService) {
    this.cartList$ = cart.cartList.asObservable();
    //cart.cartList.subscribe((observable) => this.cartList = observable); //se subscribe a lo que le ocurra a cartlist
  }
  
  ngOnInit(): void {
  }

}
