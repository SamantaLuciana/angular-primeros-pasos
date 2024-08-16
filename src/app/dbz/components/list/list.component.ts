import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dpz-list', //monbre del modulo entre medio
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

@Input()
  //me defino la informacion que usa el formulario list.component
  public characterList: Character[] = [{
    //inicializamos con un personaje q es valor por defecto
   name: 'Trunks',
   power: 10
   }]


   //onDelete = Index value : number (evento que debemos emitir )
   @Output()// para poder emitir y defino luego el tipo y el nombre
   public onDelete: EventEmitter<string> = new EventEmitter();

   //metodo para cuando toque el boton
   onDeleteCharacter( id?: string): void {


    if (!id ) return ; // si no tengo un id ..no hago nada
      console.log({ id })//vemos que funcione
    this.onDelete.emit(id);

   }

 }

