import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Pokemon } from 'src/app/core/models/pokemon/pokemon.model';
import { AppState } from 'src/app/store/app-state/app-state.model';
import { GetPokemonAction } from 'src/app/store/pokemon/actions/get-pokemon.action';
import { pokemonAdapter } from 'src/app/store/pokemon/adapters/pokemon.adapter';
import { PokemonState } from 'src/app/store/pokemon/app-state/pokemon-state.model';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})

/**
 * Componente para la vista de los pokemones.
 */
export class PokedexComponent {

  /**
   * Objeto para quitar la suscripción.
   */
  public unsubscribe: Subject<void> = new Subject<void>();

  /**
  * Identificador de entrada del pokemón.
  */
  @Input() public pokemonId: number = 1;

  /**
   * Contador
   */
  public counter: number = 0;

  public pokemon: PokemonState | undefined;
  
  constructor(protected _store: Store<AppState>) {
    this._store.subscribe( state => {this.pokemon = state.pokemon});

  }
  ngOnInit(){

  }
  increaseCounter(){
    this.counter ++;
    this._store.dispatch(new GetPokemonAction(this.counter));
  }
}
