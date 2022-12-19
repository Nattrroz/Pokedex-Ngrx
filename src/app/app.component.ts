import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
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
  incrementar(){
    this.counter++;
  }

  /**
   * Incrementa el contador
   */
  decrementar(){
    this.counter--;
  }
}
