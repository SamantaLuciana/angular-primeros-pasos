import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";



//decorador se declara del padh donde se encuentra ese archivo
@NgModule({
  declarations: [
    CounterComponent
  ],
  //para que lo consuma el mundo exterior  debo exportarlo
  exports: [
    CounterComponent
  ]
})

export class CounterModule{
  //mi clase
}
