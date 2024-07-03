import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'src/common/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { clearPokemonDetails, fetchPokemonDetails } from 'src/features/pokemonDetails/reducer/pokemonDetailsReducer';
import { toast } from 'react-toastify';
import './pokemonDetails.scss';
import Image from 'src/common/components/Image/Image';
import PokemonAttribute from 'src/features/pokemonDetails/components/PokemonAttribute';
import PokemonDetailsSkeleton from 'src/features/pokemonDetails/components/PokemonDetailsSkeleton';

const PokemonDetails = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { pokemonDetails, isLoading, error } = useAppSelector((state) => state.pokemonDetails);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!params.pokemonId) {
      toast.error('Error while fetching pokemon data', { toastId: 'noPokemonId' });
      navigate('/');
    }

    dispatch(fetchPokemonDetails(params.pokemonId!));

    return () => {
      dispatch(clearPokemonDetails());
    };
  }, [params, dispatch, navigate]);

  useEffect(() => {
    if (!error) {
      return;
    }
    navigate('/error-page', { state: { errorMessage: 'Could not fetch pokemon data' } });
  }, [error, navigate]);

  if (isLoading) {
    return <PokemonDetailsSkeleton />;
  }

  return (
    <div className="pokemon-details">
      <Image imageName={params.pokemonId || ''} fallbackImageName="placeholder" className="pokemon-details__image" />
      <div className="pokemon-details__info">
        <p className="pokemon-name">{pokemonDetails?.name}</p>
        <PokemonAttribute name="Types" value={pokemonDetails?.types.join(', ')} />
        <PokemonAttribute name="Height" value={pokemonDetails?.height} />
        <PokemonAttribute name="Weight" value={pokemonDetails?.weight} />
        <PokemonAttribute name="HP" value={pokemonDetails?.hp} />
        <PokemonAttribute name="Attack" value={pokemonDetails?.attack} />
        <PokemonAttribute name="Defence" value={pokemonDetails?.defence} />
      </div>
    </div>
  );
};

export default PokemonDetails;
