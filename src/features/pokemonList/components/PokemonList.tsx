import { useEffect } from 'react';
import { useAppSelector, useAppDispatch, usePagination } from 'src/common/hooks';
import Pokemon from 'src/features/pokemonList/components/Pokemon';
import { clearPokemonList, fetchPokemonList } from 'src/features/pokemonList/reducer/pokemonListReducer';
import './index.scss';
import PaginationButtons from 'src/common/components/PaginationButtons/PaginationButtons';
import { useNavigate } from 'react-router-dom';

const skeletonArray = Array.from(Array(10));

const PokemonList = () => {
  const navigate = useNavigate();

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

  useEffect(() => {
    if (!error) {
      return;
    }

    navigate('/error-page', { state: { errorMessage: 'There was an error while fetching pokemon list' } });
  }, [error, navigate]);

  return (
    <>
      <ul className="pokemon-list">
        {(isLoading ? skeletonArray : pokemonsToDisplay).map((pokemon, index) => (
          <Pokemon key={pokemon?.name || index} pokemon={pokemon} isLoading={isLoading} />
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
