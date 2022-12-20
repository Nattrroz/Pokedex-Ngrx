import { ActionReducerMap } from "@ngrx/store";
import { CounterModuleState } from "../counter/app-state/module-state.model";
import { counterReducer } from "../counter/reducers/counter.reducer";

/**
 * Proporciona los reducers globalmente
 */
export const reducers: ActionReducerMap<CounterModuleState, any> = {
    counter: counterReducer,
};