import { Component, EventEmitter, Input, Output } from '@angular/core';

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
   * Contador que llega del padre
   */
  @Input() counter: number = 0; //Nuevas verciones de angular, se debe inicializar la variable
  /**
   * Emite un numero al padre por medio del @Output
   */
  @Output() changeCounter = new EventEmitter<number>();

  constructor(){

  }

  /**
   * Multiplica el contador en 2
   */
  multiplyCounter(){
    this.counter *= 2;
    this.changeCounter.emit(this.counter);
  }
  /**
   * Divide el contador en 2
   */
  divideCounter(){
    this.counter /= 2;
    this.changeCounter.emit(this.counter);
  }
  /**
   * Captura el evento recibido del nieto para enviarlo al padre
   * @param newContador 
   */
  resetGrandchild(newContador:number){
    this.counter = newContador;
    this.changeCounter.emit(this.counter);
  }
}
