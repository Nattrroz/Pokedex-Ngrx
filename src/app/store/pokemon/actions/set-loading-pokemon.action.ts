import { Action } from "@ngrx/store";
import { ActionsConstants } from "./actions-constants";

/**
 * Acción para establecer el cargador en el componete del pokemón.
 */
export class SetLoadingPokemonAction implements Action{
    /**
     * Tipo de la acción.
     */
    readonly type = ActionsConstants.SetLoadingPokemonAction;
    /**
     * Constructor
     * @param isLoading Indica si se muestra o no el cargador.
     */
    constructor(public isLoading: boolean){

    }
}