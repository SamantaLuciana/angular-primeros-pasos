import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';




@NgModule({

  exports: [
    //es para verlo en el mundo exterior fuera de este modulo
    HeroComponent,
    ListComponent,
  ],
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports:[
    CommonModule //no lo necesitaba, no me daba error en la web
    //funcionaba por las actualizaciones de A17 pero seguimos los pasos 
  ]

})
export class HeroesModule { }

