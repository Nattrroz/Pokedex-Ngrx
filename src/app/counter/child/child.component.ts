import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DivideCounterAction } from 'src/app/store/counter/actions/divide-counter.action';
import { MultiplyCounterAction } from 'src/app/store/counter/actions/multiply-counter.action';
import { CounterModuleState } from 'src/app/store/counter/app-state/module-state.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
/**
 * Clase que incrementa y decrementa el contador hijo
 */
export class ChildComponent {

  /**
   * Contador
   */
  counter: number = 0;

  /**
   * Constructor
   */
  constructor(private store: Store<CounterModuleState>){

  }

  ngOnInit(){
    this.store.select(x => x.counter)
    .subscribe( counter => {this.counter = counter; console.log(counter)})
  }

  /**
   * Multiplica el contador en 2
   */
  multiplyCounter(){
    this.store.dispatch(new MultiplyCounterAction(2));
  }
  
  /**
   * Divide el contador en 2
   */
  divideCounter(){
    this.store.dispatch(new DivideCounterAction(2));
  }
  /**
   * Captura el evento recibido del nieto para enviarlo al padre
   * @param newContador 
   */
  resetGrandchild(newContador:number){
    this.counter = newContador;
  }
}
