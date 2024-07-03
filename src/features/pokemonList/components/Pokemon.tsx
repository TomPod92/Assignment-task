import React from 'react';
import { PokemonListItem } from 'src/common/types';

interface Props {
  pokemon: PokemonListItem;
}

const Pokemon = ({ pokemon }: Props) => {
  return <li className="pokemon-list-item">{pokemon.name}</li>;
};

export default Pokemon;
