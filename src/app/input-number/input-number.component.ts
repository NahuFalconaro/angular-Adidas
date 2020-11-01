import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { }

//corchetes datos de que entran @input []
//parentesis datos que salen estos dos forman el data binding @output ()
//corchetes parentesis @input @output data binding [()]
//input y output, haciendo el quantity en html, y aca redefiniendolo en quantitychange


  @Input()
  //product: Product;//para pasarle en el html el producto, ya que no la conoce, porque no se declara en ningun lado, y aca en las funciones
  quantity: number; //para que sea reutilizable este componente, se le asigna un atributo entero o number. el de arriba solo servia para productos
 
  @Input()//esto ahce referencia al [max]=product.stock del html, para asi aca trabajar generico y  hace referencia al maximo stock que tiene
  //un producto, y con este input llamando al html
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();//emisor de eventos, nosotros estmaos generando nuestro propio evento

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit(): void {
  }
  upQuantity(): void {
    if(this.quantity < this.max ){
      this.quantity++;
      this.quantityChange.emit(this.quantity);//asi se emite el evento creado anteriormente en output
    }else{
      this.maxReached.emit("Maximo stock alcanzado");//dentro de los emit, es el valor que va a emitir el evento
      //debugger;esta linea debugea, no es buena practica, atento a olvidarselo
    }
  }
  
  downQuantity(): void {
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
  onChangeQuantity(event): void {
    //controla que no sea negativo y si lo es lo cambia a positivo
    if(event.target.value < 0){
      event.target.value = event.target.value*(-1);
      this.quantity = event.target.value;
      this.quantityChange.emit(this.quantity);
    }

    //la cantidad ingresada nno supere el stock
    if(event.target.value >  this.max){
      this.quantity = this.max;
      this.quantityChange.emit(this.quantity);//adentro del emit se le pasa lo que queres cambiarle, osea porque valor le cambias
    }
    //substraccion de ceros a la izquierda
    if(event.target.value){
      event.target.value = event.target.value -0;
    }
    
    //se puede poner if... definir el if y hacer el evenPreventDefault
    //console.log(event);//con el event.target muestra el elemento que cambias, con el event.key muestra que tecla apretaste
    //el event asi como esta, muestra todo elk evento y a las funciones que podes acceder, osea event.key y si apreta una tecla hace tal cosa
    //hacer un if, event.key si esta entre 0 y 9 y si no ahcer eventpreventdefault
    //Para conocer la posicion de un boton, es event.+la position de donde hizo click
  }
}
