//ordrnar js.angular.libreriade terceros. nuestro codigo
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';



//decorador especial
@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
