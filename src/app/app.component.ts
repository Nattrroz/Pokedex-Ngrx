import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { DecreaseCounterAction } from './store/counter/actions/decrease-counter.action';
import { IncreaseCounterAction } from './store/counter/actions/increase-counter.action';
import { ResetCounterAction } from './store/counter/actions/reset-counter.action';
import { CounterModuleState } from './store/counter/app-state/module-state.model';
import { GetPokemonAction } from './store/pokemon/actions/get-pokemon.action';

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
  counter!: number;

  /**
   * Objeto para quitar la suscripción
   */
  public unsubscribe: Subject<void> = new Subject<void>();
  /**
   * Indica el año actual
   */
  currentYear: number = new Date().getFullYear();

  /**
   * Constructor del componente.
   * @param store Almacén de estados de la aplicación.
   */
  constructor(private store: Store<CounterModuleState>) {
    this.store.select(x => x.counter)
      .subscribe(counter => this.counter = counter);
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
  increaseCounter() {
    this.store.dispatch(new IncreaseCounterAction);
    this.store.dispatch(new GetPokemonAction(this.counter));
  }

  /**
   * Decrementa el contador
   */
  decreaseCounter() {
    this.store.dispatch(new DecreaseCounterAction);
    this.store.dispatch(new GetPokemonAction(this.counter));
  }

  /**
   * Reinicia el contador
   */
  resetCounter() {
    this.store.dispatch(new ResetCounterAction);
    this.store.dispatch(new GetPokemonAction(this.counter));
  }
}
