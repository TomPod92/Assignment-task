export type PokemonListItem = {
  id: string;
  name: string;
  url: string;
};

export type Pokemon = {
  id: string;
  name: string;
  height: number;
  weight: number;
  hp: number;
  attack: number;
  defence: number;
  types: string[];
};

export type ApiPokemonStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type ApiPokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
