import { configureStore } from '@reduxjs/toolkit';
import { defaultState } from './defaultState';
import { localStorageProp } from '../shared/constants';
import { createEmptyGrid, setCellValueInGrid } from '../utils';

let stateFromLocalStorage = JSON.parse(localStorage.getItem(localStorageProp) || '{}');
if (!stateFromLocalStorage.v || stateFromLocalStorage.v !== defaultState.v) {
  localStorage.removeItem(localStorageProp);
  stateFromLocalStorage = {};
}
const initialState = { ...defaultState, ...stateFromLocalStorage };

function appReducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case 'SET_CELL':
      return {
        ...state,
        grid: setCellValueInGrid(state.grid, action.value, action.rowIndex, action.cellIndex),
        player: action.value === 'x' ? 'o' : 'x',
      };

    case 'SET_SIZE':
      return {
        ...state,
        player: defaultState.player,
        size: action.size,
        grid: createEmptyGrid(action.size),
      };

    case 'RESET':
      return { ...state, player: defaultState.player, grid: createEmptyGrid(state.size) };

    default:
      return state;
  }
}

const store = configureStore({ reducer: appReducer });

export default store;
