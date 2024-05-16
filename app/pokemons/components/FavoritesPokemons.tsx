'use client';
import { useAppSelector } from '@/app/store';
import React from 'react';
import { PokemonGrid } from './PokemonGrid';
import { IoHeartOutline } from 'react-icons/io5';

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  );
};

export const FavoritePokemons = () => {
  const pokemons = useAppSelector((store) => store.pokemons.favorites);

  const arrayPokemons = Object.values(pokemons);

  return !arrayPokemons.length ? (
    <NoFavorites />
  ) : (
    <PokemonGrid pokemons={arrayPokemons} />
  );
};
