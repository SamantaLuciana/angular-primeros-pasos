import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //como quiero llamar yo a mi componente
  templateUrl: './app.component.html', //lo que se muestra en la url
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola mundo'

}
