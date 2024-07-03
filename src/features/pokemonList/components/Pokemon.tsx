import { useNavigate } from 'react-router-dom';
import SkeletonElement from 'src/common/components/SkeletonElement/SkeletonElement';
import { PokemonListItem } from 'src/common/types';

interface Props {
  pokemon?: PokemonListItem;
  isLoading?: boolean;
}

const Pokemon = ({ pokemon, isLoading }: Props) => {
  const navigate = useNavigate();

  const handlePokemonClick = () => navigate(`/pokemon-details/${pokemon?.id}`);

  if (isLoading) {
    return <SkeletonElement skeletonClassName="pokemon-list-item" />;
  }

  return (
    <li className="pokemon-list-item" onClick={handlePokemonClick}>
      <img
        src={`./src/assets/${pokemon?.id}.png`}
        className="pokemon-list-item__image"
        onError={(e) => (e.currentTarget.src = './src/assets/placeholder.png')}
      />
      <p className="pokemon-list-item__name">{pokemon?.name}</p>
    </li>
  );
};

export default Pokemon;
