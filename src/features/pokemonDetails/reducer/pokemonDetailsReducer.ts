import { toast } from 'react-toastify';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { ApiPokemonStat, ApiPokemonType, Pokemon } from 'src/common/types';

type PokemonDetailsState = {
  isLoading: boolean;
  pokemonDetails: Pokemon | null;
  error: string;
};

const initialState: PokemonDetailsState = {
  isLoading: false,
  pokemonDetails: null,
  error: '',
};

export const fetchPokemonDetails = createAsyncThunk(
  `pokemonDetails/fetchPokemonDetails`,
  async (pokemonId: string, { rejectWithValue }) => {
    try {
      if (parseInt(pokemonId) > 151) {
        throw new Error('Could not find pokemon');
      }
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

      const pokemon = response.data;
      const pokemonData: Pokemon = {
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.map((type: ApiPokemonType) => type.type.name),
        height: pokemon.height,
        weight: pokemon.weight,
        hp: pokemon.stats.find((stat: ApiPokemonStat) => stat.stat.name === 'hp').base_stat,
        attack: pokemon.stats.find((stat: ApiPokemonStat) => stat.stat.name === 'attack').base_stat,
        defence: pokemon.stats.find((stat: ApiPokemonStat) => stat.stat.name === 'defense').base_stat,
      };

      return pokemonData;
    } catch (err) {
      const error = err as AxiosError;
      toast.error('Error while fetching pokemons', { toastId: 'pokemonDetailsError' });
      return rejectWithValue(error.message);
    }
  },
);

const pokemonListSlice = createSlice({
  name: 'pokemonDetails',
  initialState,
  reducers: {
    clearPokemonDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPokemonDetails.fulfilled, (state, action: PayloadAction<Pokemon>) => {
      state.isLoading = false;
      state.pokemonDetails = action.payload;
      state.error = '';
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    builder.addCase(fetchPokemonDetails.rejected, (state, action: any) => {
      state.isLoading = false;
      state.pokemonDetails = null;
      state.error = action.payload;
    });
  },
});

export default pokemonListSlice.reducer;
export const { clearPokemonDetails } = pokemonListSlice.actions;
