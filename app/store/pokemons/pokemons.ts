import { POKEMON_LOCAL_STORAGE_KEY } from '@/app/consts';
import { FavoritePokemon, pokemonState, simplePokemon } from '@/app/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: pokemonState = {
  favorites: {},
};

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritesPokemons(state, action: PayloadAction<FavoritePokemon>) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<simplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }

      localStorage.setItem(
        POKEMON_LOCAL_STORAGE_KEY,
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { toggleFavorite, setFavoritesPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
