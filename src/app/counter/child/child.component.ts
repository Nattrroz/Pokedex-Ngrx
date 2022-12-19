import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
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
  multiplicar(){
    this.counter *= 2;
    this.changeCounter.emit(this.counter);

  }
  /**
   * Divide el contador en 2
   */
  dividir(){
    this.counter /= 2;
    this.changeCounter.emit(this.counter);

  }
}
