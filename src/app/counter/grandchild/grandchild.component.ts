import { Component, EventEmitter, Input, Output } from '@angular/core';

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
   * Contador que llega del padre
   */
  @Input() counter: number = 0; //Nuevas verciones de angular, se debe inicializar la variable
  /**
   * Emite un cambio o evento al padre por medio del @Output
   */
  @Output() changeCoaunter = new EventEmitter<number>();
  
  /**
   * Reinicia el contador a 0
   */
  resetCounter(){
    this.counter = 0;
    this.changeCoaunter.emit(this.counter);
  }
}
