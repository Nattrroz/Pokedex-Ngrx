import { counterReducer } from "../counter/reducers/counter.reducer";

/**
 * Proporciona los reducers globalmente
 */
export const reducers = {
    count: counterReducer,
};