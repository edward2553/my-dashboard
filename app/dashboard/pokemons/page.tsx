import { PokemonsResponse, simplePokemon } from '@/app/pokemons';
import { PokemonGrid } from '../../pokemons/components';

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<simplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error('This is an error that should not be thrown')

  return pokemons;
};

const PokemonPage = async () => {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pókemons <small>Estático </small>
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
};

export default PokemonPage;
