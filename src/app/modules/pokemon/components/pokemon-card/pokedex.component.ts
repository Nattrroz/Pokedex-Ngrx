import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { DreamWorldSprite } from 'src/app/core/models/pokemon/pokemon-sprites';
import { PokemonStats } from 'src/app/core/models/pokemon/pokemon-stats';
import { Pokemon } from 'src/app/core/models/pokemon/pokemon.model';
import { AppState } from 'src/app/store/app-state/app-state.model';
import { GetPokemonAction } from 'src/app/store/pokemon/actions/get-pokemon.action';

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
   * Observable de tipo pokemón.
   */
  public pokemon$: Observable<Pokemon>;

  /**
   * Observable para los sprites del pokemón.
   */
  public sprites$: Observable<DreamWorldSprite>;

  /**
   * Observable para los stats del pokemón.
   */
  public stats$: Observable<PokemonStats[]>;
  
  /**
  * Indica si se muestra el cargador del componente o no.
  */
  public isLoading$: Observable<boolean>;
  
  constructor(protected _store: Store<AppState>) {
    this.isLoading$ = this._store.select(state => state.pokemon.isLoading);
    this.pokemon$ = _store.select(state => state.pokemon);
    this.sprites$ = _store.select(state => state.pokemon.sprites.other.dream_world);
    this.stats$ = _store.select(state => state.pokemon.stats)
  }
  ngOnInit(){
    this._store.dispatch(new GetPokemonAction(1));
  }
}
