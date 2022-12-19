import { Action } from "@ngrx/store";
import { ActionsConstants } from "./actions-constants";

/**
 * Acción para decrementar el contador
 */
export class DecreaseCounterAction implements Action{
    /**
     * Tipo de la acción.
     */
    readonly type = ActionsConstants.DecreaseCounterAction;

    /**
     * Constructor
     */
    constructor(){
        
    }
}