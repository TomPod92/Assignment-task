import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'src/common/hooks';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { clearPokemonDetails, fetchPokemonDetails } from 'src/features/pokemonDetails/reducer/pokemonDetailsReducer';
import { toast } from 'react-toastify';
import './pokemonDetails.scss';
import Image from 'src/common/components/Image/Image';

const PokemonDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
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

  return (
    <div className="pokemon-details">
      <Image
        imageName={params.pokemonId || ''}
        fallbackImageName="placeholder.png"
        className="pokemon-details__image"
      />
      <div className="pokemon-details__info">
        <p>{pokemonDetails?.name}</p>
      </div>
    </div>
  );
};

export default PokemonDetails;
