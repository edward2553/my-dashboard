import { notFound } from 'next/navigation';
import { PokemonResponse } from '../pokemons';

interface Props {
  id?: string;
  name?: string;
}

export const getPokemon = async ({
  id,
  name,
}: Props): Promise<PokemonResponse> => {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id || name}`,
    {
      // cache: 'force-cache',
      next: {
        revalidate: 60 * 60 * 30 * 6,
      },
    }
  )
    .then((resp) => resp.json())
    .catch((err) => {
      notFound();
    });

  return pokemon;
};
