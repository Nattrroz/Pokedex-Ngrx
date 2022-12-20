import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResetCounterAction } from 'src/app/store/counter/actions/reset-counter.action';
import { CounterModuleState } from 'src/app/store/counter/app-state/module-state.model';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styles: [
  ]
})
/**
 * Clase que incrementa y decrementa y reinicia el contador
 */
export class GrandchildComponent {

  /**
   * Contador
   */
  counter: number = 0;
  
  /**
   * Constructor del componente.
   * @param store Almacén de estados de la aplicación.
   */
  constructor(private store: Store<CounterModuleState>) {
    
  }

  /**
   * Método que se ejecuta al iniciar el componente.
   */
  ngOnInit(){
    this.store.select(x => x.counter)
    .subscribe( counter => this.counter = counter);
  }

  /**
   * Reinicia el contador a 0
   */
  resetCounter(){
    this.store.dispatch(new ResetCounterAction);
  }
}
