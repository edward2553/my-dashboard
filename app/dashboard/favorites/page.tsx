import { FavoritePokemons } from '@/app/pokemons/components';
import { Metadata } from 'next';
import { IoHeartOutline } from 'react-icons/io5';

export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'The list of the first 150 Pokemons',
};

export const NoFavorites = () => {
  return (
    <div className='flex flex-col h-[50vh] items-center justify-center'>
      <IoHeartOutline size={100} className='text-red-500' />
      <span>No hay favoritos</span>
    </div>
  )
}

const PokemonPage = async () => {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemones favoritos
        <small className="text-blue-500">Global State </small>
      </span>

      <FavoritePokemons />
    </div>
  );
};

export default PokemonPage;


