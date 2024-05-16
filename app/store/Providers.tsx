'use client';

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '.';
import { POKEMON_LOCAL_STORAGE_KEY } from '../consts';
import { setFavoritesPokemons } from './pokemons/pokemons';

const Providers = (props: React.PropsWithChildren) => {
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem(POKEMON_LOCAL_STORAGE_KEY) ?? '{}'
    );
    
    store.dispatch(setFavoritesPokemons(favorites))
  }, []);

  return <Provider store={store}>{props.children}</Provider>;
};

export default Providers;
