import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable } from "rxjs";
import { PokemonEndpointService, POKEMON_ENDPOINT_SERVICE } from "src/app/core/interfaces/services/pokemon/pokemon-endpoint-service.interface";
import { ActionsConstants } from "../actions/actions-constants";
import { GetPokemonAction } from "../actions/get-pokemon.action";
import { catchError, switchMap } from "rxjs/operators";
import { SetLoadingPokemonAction } from "../actions/set-loading-pokemon.action";
import { PokemonState } from "../app-state/pokemon-state.model";
import { Pokemon } from "src/app/core/models/pokemon/pokemon.model";
import { GetPokemonSuccessAction } from "../actions/get-pokemon-success.action";

/**
 * Efecto que obtiene la información parcial de un pokemón.
 */
@Injectable()
export class GetPokemonInfoEffect{

    constructor(
        private _actions$: Actions,
        @Inject(POKEMON_ENDPOINT_SERVICE)
        private _pokemonEndpointService: PokemonEndpointService,
    ){}

    /**
     * Creación del efecto.
     */
    observable$ = createEffect(() => this.execute());

    /**
     * Método que ejecuta el efecto.
     */

    execute(): Observable<Action>{
        return this._actions$
        .pipe(
            ofType<GetPokemonAction>(ActionsConstants.GetPokemonAction),
            switchMap((action) => this._pokemonEndpointService.getPokemon(action.pokemonId)
            .pipe(
                switchMap(response => {

                    return [
                        new GetPokemonSuccessAction(response),
                        new SetLoadingPokemonAction(false)
                    ]
                    
                })
                
            ))
        )
    }
} 