import { PokemonCard, simplePokemon } from '@/app/pokemons';
import Image from 'next/image';
import React from 'react';

interface Props {
  pokemons: simplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
