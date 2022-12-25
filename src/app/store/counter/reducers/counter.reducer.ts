import { ActionsConstants } from "../actions/actions-constants";
import { DecreaseCounterAction } from "../actions/decrease-counter.action";
import { DivideCounterAction } from "../actions/divide-counter.action";
import { IncreaseCounterAction } from "../actions/increase-counter.action";
import { MultiplyCounterAction } from "../actions/multiply-counter.action";
import { ResetCounterAction } from "../actions/reset-counter.action";

/**
 * Todas las acciones que acepta este reducer.
 */
export type CounterActions = IncreaseCounterAction
| DecreaseCounterAction
| MultiplyCounterAction
| DivideCounterAction
| ResetCounterAction
;

/**
 * Reducer del manejador del contador.
 * @param state Estado del componente.
 * @param action Acción realizada.
 */
export function counterReducer (state: number = 1, action: CounterActions){
    switch( action.type){
        case ActionsConstants.IncreaseCounterAction:
            return state + 1;
        case ActionsConstants.DecreaseCounterAction:
            return state - 1;
        case ActionsConstants.MultiplyCounterAction:
            return state * action.payload;
        case ActionsConstants.DivideCounterAction:
            return state / action.payload;
        case ActionsConstants.ResetCounterAction:
            return state = 1;
        default:
            return state;
    }
}