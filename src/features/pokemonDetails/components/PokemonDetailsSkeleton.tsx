import SkeletonElement from 'src/common/components/SkeletonElement/SkeletonElement';

const PokemonDetailsSkeleton = () => {
  return (
    <div className="pokemon-details">
      <SkeletonElement skeletonClassName="pokemon-details__image-skeleton" />
      <div className="pokemon-details__info">
        <SkeletonElement skeletonClassName="pokemon-details__text-skeleton" />
        <SkeletonElement skeletonClassName="pokemon-details__text-skeleton" />
        <SkeletonElement skeletonClassName="pokemon-details__text-skeleton" />
        <SkeletonElement skeletonClassName="pokemon-details__text-skeleton" />
        <SkeletonElement skeletonClassName="pokemon-details__text-skeleton" />
        <SkeletonElement skeletonClassName="pokemon-details__text-skeleton" />
      </div>
    </div>
  );
};

export default PokemonDetailsSkeleton;
