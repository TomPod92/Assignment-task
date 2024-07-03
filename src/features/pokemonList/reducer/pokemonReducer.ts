import { toast } from 'react-toastify';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { PokemonListItem } from 'src/common/types';

type InitialState = {
  loading: boolean;
  pokemons: PokemonListItem[];
  error: string;
};

const initialState: InitialState = {
  loading: false,
  pokemons: [],
  error: '',
};

export const fetchPokemonList = createAsyncThunk('pokemonList/fetchPokemonList', async (_data, { rejectWithValue }) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    toast.success('Pokemons fetched');
    return response.data.results;
  } catch (err) {
    const error = err as AxiosError;
    toast.error('Error while fetching pokemons');
    return rejectWithValue(error.message);
  }
});

const pokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState,
  reducers: {
    clearPokemonList: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPokemonList.fulfilled, (state, action: PayloadAction<PokemonListItem[]>) => {
      state.loading = false;
      state.pokemons = action.payload;
      state.error = '';
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    builder.addCase(fetchPokemonList.rejected, (state, action: any) => {
      state.loading = false;
      state.pokemons = [];
      state.error = action.payload;
    });
  },
});

export default pokemonListSlice.reducer;
export const { clearPokemonList } = pokemonListSlice.actions;
