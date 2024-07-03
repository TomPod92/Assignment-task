import { Link } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
  const handlePokemonClick = () => navigate(`/pokemon-details/${pokemon?.id}`);
  return (
    <header>
      <Link to="/">
        <h1>Pokedex</h1>
      </Link>
    </header>
  );
};

export default AppHeader;
