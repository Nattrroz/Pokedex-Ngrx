import { Action } from "@ngrx/store";
import { ActionsConstants } from "./actions-constants";

/**
 * Acción para reiniciar el contador.
 */
export class ResetCounterAction implements Action{

    /**
     * Tipo de la acción.
     */
    readonly type = ActionsConstants.ResetCounterAction;

    /**
     * Constructor de la acción.
     */
    constructor() {
    }
}