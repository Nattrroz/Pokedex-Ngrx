import { Action } from "@ngrx/store";
import { Pokemon } from "src/app/core/models/pokemon/pokemon.model";
import { ActionsConstants } from "./actions-constants";

/**
 * Acción que se ejecuta al obtener un pokemón.
 */
export class GetPokemonSuccessAction implements Action{
    /**
     * Tipo de acción.
     */
    readonly type = ActionsConstants.GetPokemonSuccessAction;

    /**
     * Constructor
     * @param pokemon Pokemón.
     */
    constructor(public pokemon: Pokemon) {
    
    }
}