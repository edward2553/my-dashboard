import { POKEMON_LOCAL_STORAGE_KEY } from '@/app/consts';
import { simplePokemon } from '@/app/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FavoritePokemon = { [key: string]: simplePokemon }

interface pokemonState {
  favorites: FavoritePokemon;
}

// const getInitialState = () => {
//   const favoritesPokemons = JSON.parse(
//     localStorage.getItem(POKEMON_LOCAL_STORAGE_KEY) ?? '{}'
//   );

//   return favoritesPokemons;
// };

const initialState: pokemonState = {
  favorites: {}
  // ...getInitialState(),
  // '1': { id: '1', name: 'bulbasaur' },
  // '4': { id: '4', name: 'charmander' },
};

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritesPokemons(state, action: PayloadAction<FavoritePokemon>) {

      state.favorites = action.payload

    },

    toggleFavorite(state, action: PayloadAction<simplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }

      // TODO: No hacer en redux
      localStorage.setItem(POKEMON_LOCAL_STORAGE_KEY, JSON.stringify(state.favorites));
    },
  },
});

export const { toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
