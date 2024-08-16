import { Injectable } from '@angular/core';
import { v4 as uuid  } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({ //este decorador lo trata como un servicio
  providedIn: 'root'
})
export class DbzService {

//los datos que yo manejo(ARRAY)

public characters: Character[] = [{
  //nos hacemos dos personajes
   id: uuid(),
   name: 'Krillin',
   power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 950
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];


  //metodo
  addCharacter( character: Character ):void {
    // toma todas las propiedades y ponlas en este nuevo objeto que cree ( con el express ...)
    const newCharacter: Character = {id: uuid(), ...character  }

   this.characters.push(newCharacter);
  }

   //lo que recibo index del tipo number y pienso que es lo que debe hacer
   // onDeleteCharacter ( index:number ){
  //this.characters.splice(index, 1);  //borra 1 x 1 en base al indice
   deleteCharacterById( id:string ){
    // el filtwer regresa un nuevo array conn la condicion q pusimos
   this.characters = this.characters.filter( character => character.id !== id) ;

  }



}
