import SkeletonElement from 'src/common/components/SkeletonElement/SkeletonElement';
import { PokemonListItem } from 'src/common/types';

interface Props {
  pokemon?: PokemonListItem;
  isLoading?: boolean;
}

const Pokemon = ({ pokemon, isLoading }: Props) => {
  if (isLoading) {
    return <SkeletonElement skeletonClassName="pokemon-list-item" />;
  }

  return (
    <li className="pokemon-list-item">
      <img src={`./src/assets/${pokemon?.id}.png`} />
      <p>{pokemon?.name}</p>
    </li>
  );
};

export default Pokemon;
