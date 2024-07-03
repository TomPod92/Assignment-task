import { useEffect } from 'react';
import { useAppSelector, useAppDispatch, usePagination } from 'src/common/hooks';
import Pokemon from 'src/features/pokemonList/components/Pokemon';
import { clearPokemonList, fetchPokemonList } from 'src/features/pokemonList/reducer/pokemonReducer';
import './index.scss';
import PaginationButtons from 'src/common/components/PaginationButtons/PaginationButtons';

const skeletonArray = Array.from(Array(10));

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

  useEffect(() => {
    dispatch(fetchPokemonList());

    return () => {
      dispatch(clearPokemonList());
    };
  }, [dispatch]);

  return (
    <>
      <ul className="pokemon-list">
        {(isLoading ? skeletonArray : pokemonsToDisplay).map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} isLoading={isLoading} />
        ))}
      </ul>
      {!isLoading && (
        <PaginationButtons
          prevDisabled={previousButtonDisabled}
          nextDisabled={nextButtonDisabled}
          onPrevClick={goToPreviousPage}
          onNextClick={goToNextPage}
        />
      )}
    </>
  );
};

export default PokemonList;
