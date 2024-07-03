import PokemonList from 'src/features/pokemonList/components/PokemonList';

export type NavigationItem = {
  path: string;
  element: JSX.Element;
};

export const navigationConfig: NavigationItem[] = [
  {
    path: '/',
    element: <PokemonList />,
  },
  {
    path: '/pokemon-details/:pokemonId',
    element: <div>Details</div>,
  },
];
