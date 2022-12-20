import { CounterModuleState } from "../counter/app-state/module-state.model";
import { PokemonState } from "../pokemon/app-state/pokemon-state.model";

/**
 * Estados de la aplicación.
 */
export interface AppState{
    counter: number;
    pokemon: PokemonState;
}