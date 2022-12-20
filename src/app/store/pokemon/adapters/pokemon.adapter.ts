import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { Pokemon } from "src/app/core/models/pokemon/pokemon.model";
import { PokemonState } from "../app-state/pokemon-state.model";

/**
 * Adaptador para el estado del pokemón.
 */
export const pokemonAdapter: EntityAdapter<Pokemon> = createEntityAdapter<Pokemon>({
    selectId: item => item.id
});

/**
 * Estado inicial del pokemón.
 */

export const initialStatePokemon: PokemonState = pokemonAdapter.getInitialState({
    isLoading: false,
    id: null,
    
    height: null,
    name: null,
    base_experience: null,
    sprites: {
        other:{
            dream_world:{
                front_default: null
            }
        }
    },
    stats: [{
        base_stat: null,
        effort: null,
        stat: {
            name: null
        }
    }],
    weight: null,
});

/**
 * Selector para el estado
 */
export const { selectAll } = pokemonAdapter.getSelectors();
