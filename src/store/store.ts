import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from 'src/features/pokemonList/reducer/pokemonReducer';

const store = configureStore({
  reducer: {
    pokemonList: pokemonsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
