
import { Component, OnInit } from '@angular/core';

import { Character } from './../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page', //con app siognifica Com personalizado
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
 //hago la inyeccion del service
  constructor( private dbzService: DbzService ){}

    //regresa un arreglo de character
    get characters(): Character []{
      return [ ...this.dbzService.characters]; // ...crea una copia de c/dperonaje

    }

    //creo un metodo que vo hacer cuando se elimine un peronaje/ voy a eliminar ee peronaje por el id
     onDeleteCharacter( id:string ):void{
      this.dbzService.deleteCharacterById( id );
     }


     //agrego un peronaje 
    onNewCharacter( character: Character ): void{
      this.dbzService.addCharacter ( character ); // mando el caracter q resivo del n/e
     }

  }




