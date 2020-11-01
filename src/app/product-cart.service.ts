import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/Product';

@Injectable({
  providedIn: 'root'
})

/**
 * maneja la logica del carrito 
 **/
export class ProductCartService {
  private _cartList: Product[] = [];//variable encapsulada se hace siempre private
  //se le pone _ adelante para poder seguir usando el mismo nombre
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject([]);//Sirve para encapsular una variable
  
  constructor() { }

  addToCart(product: Product) {
    let item : Product = this._cartList.find((v1) => v1.name == product.name );
    if(!item){
      this._cartList.push({...product});//Hace un objeto y le pone todo lo que tiene producto, osea crea una copia con los valores de product
      
    }else{
      item.quantity+= product.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);//emite el nuevo valor, es como decir, este es tu sig valor, dentor se emite la variable privada
    //es un patros que suele ser siempre igual, esto de next, es equivalente a emit
  }

}
