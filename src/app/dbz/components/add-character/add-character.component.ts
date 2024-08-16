import { Component, EventEmitter, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  //emitir el componente q hara que el componente se guarde en el main-page.components.ts
  @Output() //PODER PARA EMITIR
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = { //lo inicio
    name: '',
    power: 0
  };

    //metodo para cuando toque el boton agregar agarre ese objeto
  emitCharacter():void {

    //debugger;  se puede poner para depurar la app y ver si esta funcionando
    console.log(this.character);
    if ( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    //para limpiar el componente un a vez que agregamos en el form
    this.character = { name: '', power: 0 };
  }

}
