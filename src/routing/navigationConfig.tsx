export type NavigationItem = {
  path: string;
  element: JSX.Element;
};

export const navigationConfig: NavigationItem[] = [
  {
    path: '/',
    element: <div>List</div>,
  },
  {
    path: '/pokemon-details/:pokemonId',
    element: <div>Details</div>,
  },
];
