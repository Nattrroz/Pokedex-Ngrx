import { Component } from '@angular/core';

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
  counter: number;

  /**
   * Constructor
   */
  constructor(){
    this.counter = 10;
  }

  /**
   * Decrementa el contador
   */
  increaseCounter(){
    this.counter++;
  }

  /**
   * Incrementa el contador
   */
  decreaseCounter(){
    this.counter--;
  }
}
