import { configureStore } from '@reduxjs/toolkit';
import pokemonsListReducer from 'src/features/pokemonList/reducer/pokemonListReducer';

const store = configureStore({
  reducer: {
    pokemonList: pokemonsListReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
