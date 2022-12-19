import { Action } from "@ngrx/store";
import { ActionsConstants } from "./actions-constants";

/**
 * Acción para incrementar el contador
 */
export class IncreaseCounterAction implements Action{
    /**
     * Tipo de la acción.
     */
    readonly type = ActionsConstants.IncreaseCounterAction;

    /**
     * Constructor
     */
    constructor(){

    }
}