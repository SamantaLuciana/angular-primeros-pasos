import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

public heroName: string[] = ['Spiderman','Ironman','She Hulk','Thor'];
public deletedHero?: string;

//creamos un metodo que siempre que tenga un valor, va a borrar un héroe
removeLastHero():void{
 this.deletedHero = this.heroName.pop(); // esta variable tiene que vivir en todo metodo
 }
}
