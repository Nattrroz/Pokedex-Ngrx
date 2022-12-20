import { Action } from "@ngrx/store";
import { ActionsConstants } from "./actions-constants";

/**
 * Acción que retorna la información del pokemón con respecto a su identificador.
 */
export class GetPokemonAction implements Action{
    /**
     * Tipo de acción.
     */
    readonly type = ActionsConstants.GetPokemonAction;

    /**
     * Constructor
     * @param pokemonId Identificador del pokemón.
     */
    constructor(public pokemonId: number) {
    
    }
}