import { configureStore } from '@reduxjs/toolkit';
import { defaultState } from './defaultState';
import { localStorageProp } from '../shared/constants';
import { createEmptyGrid, setCellValueInGrid } from '../utils';

let stateFromLocalStorage = JSON.parse(localStorage.getItem(localStorageProp) || '{}');
if (!stateFromLocalStorage.v || stateFromLocalStorage.v !== defaultState.v) {
    localStorage.removeItem(localStorageProp);
    stateFromLocalStorage = {};
}
const initialState = Object.assign({}, defaultState, stateFromLocalStorage);

function appReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_CELL':
            return Object.assign({}, state, {
                grid: setCellValueInGrid(state.grid, action.value, action.rowIndex, action.cellIndex)
            });

        case 'SET_SIZE':
            return Object.assign({}, state, {
                size: action.size,
                grid: createEmptyGrid(action.size)
            });

        case 'RESET':
            return Object.assign({}, state, {
                grid: createEmptyGrid(state.size)
            });

        default:
            return state;
    }
}

const store = configureStore({ reducer: appReducer});

export default store;
