import { Action } from "@ngrx/store";
import { ActionsConstants } from "./actions-constants";

/**
 * Acción para multiplicar el contador.
 */
export class DivideCounterAction implements Action{
    /**
     * Tipo de acción.
     */
    readonly type = ActionsConstants.DivideCounterAction
    /**
     * Constructor
     * @param payload Número que se utilizará para dividir.
     */
    constructor(public payload: number) {
    }
}