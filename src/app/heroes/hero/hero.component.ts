import { Component } from '@angular/core';
//corazon y cerebro clases que tiene un decorador que define se, tem y estilos
@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
public name = 'ironman ';
public age: number = 45;


//se ve como una pripiedad pero es un metodo
get capitalizedName():string{
  return this.name.toUpperCase();
}

//junta el nombre y la edad
getHeroDescription():string { //epecificar el valor de retorno
 return `${ this.name } - ${ this.age }`;

}

changeHero():void {
this.name = 'Spiderman';
}

changeAge():void{
  this.age = 25;

}

resetForm():void{
  this.name='iroman';
  this.age=45;
}

}
