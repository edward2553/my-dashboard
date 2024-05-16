import { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';
import { RootState } from '..';
import { POKEMON_LOCAL_STORAGE_KEY } from '@/app/consts';

export const localStoreMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);

    if (action.type === 'pokemons/toggleFavorite') {
      const { pokemons } = state.getState() as RootState;

      localStorage.setItem(POKEMON_LOCAL_STORAGE_KEY, JSON.stringify(pokemons));
      return;
    }
  };
};
