import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Maquina';
  codigo!: number;
  dinero!: number;
  cambio!: number;
  mensaje!: string;
  inventario: Array<number>; 
  ventasProductos: Array<number>; 
  codigosProductos: Array<number>; 
  precios: Array<number>; 
  productos: Array<string>;
  productosDisponibles: Array <number>;
  

  constructor(){
    this.codigo = 10001;
    this.cambio = 0;
    this.inventario = new Array(30,40,30,40);
    this.ventasProductos = new Array (0,0,0,0);
    this.codigosProductos = new Array (10001,10002,10003,10004);
    this.precios = new Array (1200,1600,3000,2000);
    this.productos = new Array ('Chocolatina JET x 12gr', 'Coca Cola x 250ml', 'Maní moto natural x 150gr', 'Papas Margarita natural x 150gr');
    this.productosDisponibles = new Array (30,40,30,40);
  }

  funcionamiento(){
  for (let i = 0; i <= this.codigosProductos.length; i++) {
    if(this.codigosProductos[i] == this.codigo && this.precios[i] <= this.dinero){
      if(this.inventario[i]-this.ventasProductos[i] > 0){
        this.mensaje = this.productos[i] + ", disponible";
        this.ventasProductos[i]= this.ventasProductos[i]+1;
        this.productosDisponibles[i] = this.productosDisponibles[i]-1;
        console.log(this.ventasProductos);
        console.log(this.inventario);
        console.log(this.productosDisponibles);
        this.cambio = this.dinero - this.precios[i];
      }
      else{
        this.mensaje = this.productos[i] + ", no disponible";
      }
    }
    
  }
  
  }
}
