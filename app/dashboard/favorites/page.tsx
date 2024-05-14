import { PokemonsResponse, simplePokemon } from '@/app/pokemons';
import { PokemonGrid } from '../../pokemons/components';
import { Metadata } from 'next';

export const metadata : Metadata = {
  title: 'Favoritos',
  description: 'The list of the first 150 Pokemons'
}


const PokemonPage = async () => {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemones favoritos<small className='text-blue-500'>Global State </small>
      </span>

      <PokemonGrid pokemons={[]} />
    </div>
  );
};

export default PokemonPage;
