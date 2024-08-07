/*import { Component } from "@angular/core";

esto lo hice manual
@Component( {
  selector: 'app-counter', //el nombre que le doy a mi componente personalizado y necesita un module
  template: '<h1>Hola Counter</h1>'

}) //ssi creo un componente necesito un template
export class CounterComponent {

}*/

//lo haces con a-components 
import { Component, OnInit } from '@angular/core';

//en el temple ponemos los backticks para hacer el html que es maximo 4 lineas
@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>

  <button (click)="increaseBy(+1)">+1</button> <!--si quiero incrementar en (1)-->
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>

  `
})
//funcionalidad de los botones(todo en una capsula)
export class CounterComponent  {
  public title: string = 'Hola mundo'
  public counter: number = 10;

  increaseBy( value: number): void{
    this.counter += value;
  }

  reset(){
    this.counter = 10;
  }

}
