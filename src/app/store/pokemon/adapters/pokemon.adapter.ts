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
    id: 0,
    height: 0,
    name: '',
    base_experience: 0,
    sprites: {
        other:{
            dream_world:{
                front_default: ''
            }
        }
    },
    stats: [{
        base_stat: 0,
        effort: 0,
        stat: {
            name: ''
        }
    }],
    weight: 0,
});

/**
 * Selector para el estado
 */
export const { selectAll } = pokemonAdapter.getSelectors();
