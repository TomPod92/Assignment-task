import { configureStore } from '@reduxjs/toolkit';
import pokemonsListReducer from 'src/features/pokemonList/reducer/pokemonListReducer';
import pokemonsDetailsReducer from 'src/features/pokemonDetails/reducer/pokemonDetailsReducer';

const store = configureStore({
  reducer: {
    pokemonList: pokemonsListReducer,
    pokemonDetails: pokemonsDetailsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
