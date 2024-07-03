import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'src/common/hooks';
import Pokemon from 'src/features/pokemonList/components/Pokemon';
import { clearPokemonList, fetchPokemonList } from 'src/features/pokemonList/reducer/pokemonReducer';
import './index.scss';

const PokemonList = () => {
  const { pokemons, isLoading, error } = useAppSelector((state) => state.pokemonList);
  const dispatch = useAppDispatch();
  console.log('->', pokemons);

  useEffect(() => {
    dispatch(fetchPokemonList());

    return () => {
      dispatch(clearPokemonList());
    };
  }, [dispatch]);

  return (
    <ul className="pokemon-list">
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.name} pokemon={pokemon} />
      ))}
    </ul>
  );
};

export default PokemonList;
