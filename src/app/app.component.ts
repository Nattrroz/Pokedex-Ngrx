import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '@ngrx/store/src';
import { Subject } from 'rxjs';
import { DecreaseCounterAction } from './store/counter/actions/decrease-counter.action';
import { IncreaseCounterAction } from './store/counter/actions/increase-counter.action';
import { CounterModuleState } from './store/counter/app-state/module-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * Clase que incrementa y decrementa el contador padre
 */
export class AppComponent {
  title = 'pokedex-app';

  /**
   * Variable contador
   */
  counter: number = 10;
  counter1: number = 10;


  /**
   * Objeto para quitar la suscripción
   */
  public unsubscribe: Subject<void> = new Subject<void>();

  /**
   * Constructor
   * @param store 
   */
  constructor(private store: Store<CounterModuleState>){
    this.store.subscribe( state => {
      this.counter = state.counter;
    });
  }

  /**
  * Método que se ejecuta al destruir el componente.
  */
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  /**
   * Incrementa el contador
   */
  increaseCounter(){
    this.store.dispatch(new IncreaseCounterAction);
  }

  /**
   * Decrementa el contador
   */
  decreaseCounter(){
    this.store.dispatch(new DecreaseCounterAction);
  }
}
