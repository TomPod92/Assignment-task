import { useEffect } from 'react';
import { useAppSelector, useAppDispatch, usePagination } from 'src/common/hooks';
import Pokemon from 'src/features/pokemonList/components/Pokemon';
import { clearPokemonList, fetchPokemonList } from 'src/features/pokemonList/reducer/pokemonReducer';
import './index.scss';

const PokemonList = () => {
  const { pokemons, isLoading, error } = useAppSelector((state) => state.pokemonList);
  const dispatch = useAppDispatch();

  const {
    paginatedItems: pokemonsToDisplay,
    previousButtonDisabled,
    nextButtonDisabled,
    goToPreviousPage,
    goToNextPage,
  } = usePagination({ items: pokemons, resultsPerPage: 20 });
  console.log('pokemons', pokemons);
  console.log('pokemonsToDisplay', pokemonsToDisplay);

  useEffect(() => {
    dispatch(fetchPokemonList());

    return () => {
      dispatch(clearPokemonList());
    };
  }, [dispatch]);

  return (
    <ul className="pokemon-list">
      {pokemonsToDisplay.map((pokemon) => (
        <Pokemon key={pokemon.name} pokemon={pokemon} />
      ))}
    </ul>
  );
};

export default PokemonList;
