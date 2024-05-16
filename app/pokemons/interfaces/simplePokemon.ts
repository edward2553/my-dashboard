export interface simplePokemon {
  id: string;
  name: string;
}


export type FavoritePokemon = { [key: string]: simplePokemon }

export interface pokemonState {
  favorites: FavoritePokemon;
}