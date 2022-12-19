import { Action } from "@ngrx/store";
import { ActionsConstants } from "../actions/actions-constants";

/**
 * Reducer del manejador del contador.
 * @param state Estado del componente.
 * @param action Acción realizada.
 */
export function counterReducer (state: number = 10, action: Action){
    switch( action.type){
        case ActionsConstants.IncreaseCounterAction:
            return state + 1;
        case ActionsConstants.DecreaseCounterAction:
            return state - 1;
        default:
            return state;
    }
}