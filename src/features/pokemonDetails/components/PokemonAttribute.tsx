import classNames from 'classnames';
import React from 'react';

interface Props {
  name: string;
  value?: string | number;
  className?: string;
}

const PokemonAttribute = ({ name, value = '', className }: Props) => {
  return (
    <p className={classNames('pokemon-attribute', className)}>
      <span className="pokemon-attribute__name">{name}</span>
      <span className="pokemon-attribute__value">{value}</span>
    </p>
  );
};

export default PokemonAttribute;
