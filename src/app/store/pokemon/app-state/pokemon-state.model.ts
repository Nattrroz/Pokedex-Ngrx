import { EntityState } from "@ngrx/entity";
import { Pokemon } from "src/app/core/models/pokemon/pokemon.model";

/**
 * Estado del componente del pokemón.
 */
export interface PokemonState extends Pokemon{
    /**
     * Indica si se esta cargando el componente.
     */
    isLoading: boolean;
}