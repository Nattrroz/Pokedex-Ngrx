import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { GetPokemonType, GetPokemonTypeBackground, GetPokemonTypeIcon, PokemonTypes } from 'src/app/core/models/enums/pokemon-types.enum';
import { DreamWorldSprite } from 'src/app/core/models/pokemon/pokemon-sprites';
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
   * Observable de tipo pokemón.
   */
  public pokemon$: Observable<Pokemon>;

  /**
   * Observable para los sprites del pokemón.
   */
  public sprites$: Observable<DreamWorldSprite>;

  /**
  * Indica si se muestra el cargador del componente o no.
  */
  public isLoading$: Observable<boolean>;

  /**
   * Tipos de pokemones del enum.
  */
  public pokemonTypes = Object.values(PokemonTypes).filter(
    (value) => typeof value === "string"
  );

  /**
   * Observable para obtener el color con respecto al tipo de pokemon.
   */
  public pokemonColorType!: Observable<string[]>

  /**
   * Constructor
   * @param _store Almacén de estados de la aplicación.
   */
  constructor(protected _store: Store<AppState>) {
    this.isLoading$ = this._store.select(state => state.pokemon.isLoading);
    this.pokemon$ = _store.select(state => state.pokemon);
    this.sprites$ = _store.select(state => state.pokemon.sprites.other.dream_world);
    this.pokemonColorType = _store.select(x => x.pokemon.types.map(x => x.type.name))
  }

  /**
   * Método que se ejecuta al iniciar el componente.
   */
  ngOnInit() {
    this._store.dispatch(new GetPokemonAction(1));
  }

  /**
   * Obtiene el tipo de pokemón del enumerable.
   * @param type Tipo de pokemón.
   */
  getPokemonType(type: string) {
    let pokemonType: { text?: string; }[] = [];
    this.pokemonTypes.forEach((x) => {
      if (x == type) {
        pokemonType.push({
          text: GetPokemonType.get(type),
        });
      }
    });
    return pokemonType;
  }

  /**
   * Obtiene el icono del tipo de pokemón del enumerable.
   * @param type Typo de pokemón.
   */
  getPokemonTypeIcon(type: string) {
    let pokemonTypeIcon: { text?: string; }[] = [];
    this.pokemonTypes.forEach((x) => {
      if (x == type) {
        pokemonTypeIcon.push({
          text: GetPokemonTypeIcon.get(type),
        });
      }
    });
    return pokemonTypeIcon;
  }

  /**
   * Obtiene el color o background de acuerdo al tipo de pokemón del enumerable.
   * @param type Tipo de pokemón.
   */
  getPokemonTypeBackground(type: string) {
    let pokemonColorType: { text?: string; }[] = [];
    this.pokemonTypes.forEach((x) => {
      if (x == type) {
        pokemonColorType.push({
          text: GetPokemonTypeBackground.get(type),
        });
      }
    })
    return pokemonColorType.map(x => x.text)[0];
  }
}