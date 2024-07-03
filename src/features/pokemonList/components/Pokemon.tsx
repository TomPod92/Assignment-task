import { useNavigate } from 'react-router-dom';
import SkeletonElement from 'src/common/components/SkeletonElement/SkeletonElement';
import { PokemonListItem } from 'src/common/types';
import Image from 'src/common/components/Image/Image';

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
      <Image imageName={pokemon?.id} className="pokemon-list-item__image" fallbackImageName="placeholder" />
      <p className="pokemon-list-item__name">{pokemon?.name}</p>
    </li>
  );
};

export default Pokemon;
