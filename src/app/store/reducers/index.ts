import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../app-state/app-state.model";
import { counterReducer } from "../counter/reducers/counter.reducer";
import { PokemonReducer } from "../pokemon/reducers/pokemon.reducer";

/**
 * Proporciona los reducers globalmente
 */
export const reducers: ActionReducerMap<AppState, any> = {
    counter: counterReducer,
    pokemon: PokemonReducer
};