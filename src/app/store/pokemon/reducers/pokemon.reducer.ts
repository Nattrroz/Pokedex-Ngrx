import { ActionsConstants } from "../actions/actions-constants";
import { GetPokemonSuccessAction } from "../actions/get-pokemon-success.action";
import { GetPokemonAction } from "../actions/get-pokemon.action";
import { SetLoadingPokemonAction } from "../actions/set-loading-pokemon.action";
import { initialStatePokemon } from "../adapters/pokemon.adapter";
import { PokemonState } from "../app-state/pokemon-state.model";

/**
 * Tipos de acciones para el pokemon.
 */
export type PokemonActions = GetPokemonAction
| GetPokemonSuccessAction
| SetLoadingPokemonAction;

/**
 * Reducer del manejador del pokemon.
 */
export function PokemonReducer(state: PokemonState | undefined = initialStatePokemon, action: PokemonActions){
    switch(action.type){
        case ActionsConstants.GetPokemonAction:
            return {...state, isLoading: true};
        case ActionsConstants.GetPokemonSuccessAction:
            return{
                ...state,
                isLoading: true,
                id: action.pokemon.id,
                height: action.pokemon.height,
                name: action.pokemon.name,
                base_experience: action.pokemon.base_experience,
                sprites: {
                    other:{
                        dream_world:{
                            front_default: action.pokemon.sprites.other.dream_world.front_default
                        }
                    }
                },
                stats: action.pokemon.stats,
                weight: action.pokemon.weight
            };
        case ActionsConstants.SetLoadingPokemonAction:
            return{ ...state, isLoading: action.isLoading}
        default:
            return state;
    }
}
