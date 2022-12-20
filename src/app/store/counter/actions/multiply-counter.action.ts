import { Action } from "@ngrx/store"
import { ActionsConstants } from "./actions-constants"

/**
 * Acción para multiplicar el contador.
 */
export class MultiplyCounterAction implements Action{
    /**
     * Tipo de la acción.
     */
    readonly type = ActionsConstants.MultiplyCounterAction;
    
    /**
     * Constructor
     * @param payload Número que se utilizará para multiplicar.
     */
    constructor( public payload: number) {
        
    }
}