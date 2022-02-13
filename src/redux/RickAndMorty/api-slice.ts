import { TCharacter } from './../types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCharacters } from "./api-operations.js";
import { IState, ISetPage, TFindParams } from "../types.js";

const initialState: IState = {
  characters: [],
  characterToFind: {
    name: "",
    gender: "",
    status: "",
  },
  isLoading: false,
  curentPage: 1,
  filter: {
    name: "",
    gender: "",
    status: "",
  },
};

export const apiSlice = createSlice({
  name: "rickAndMortyAPI",
  initialState,
  reducers: {
    setPage: (state: IState, action: PayloadAction<number>) => {
      state.curentPage = action.payload;
    },
    setCharacterToFind: (state: IState, action: PayloadAction<TFindParams>) => {
      state.characterToFind = action.payload;
    },
    resetCharacters: (state: IState) => {
      state.characters = [];
    },
    setFilter: (state: IState, action: PayloadAction<TFindParams>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchCharacters.pending](state: IState, _) {
      state.isLoading = true;
    },

    [fetchCharacters.fulfilled](state: IState, action: PayloadAction<TCharacter[]>) {
      state.characters = [...state.characters, ...action.payload];
      state.isLoading = false;
    },

    [fetchCharacters.rejected](state: IState, _) {
      state.isLoading = false;
    },
  },
});

export const { setPage, setCharacterToFind, resetCharacters, setFilter } =
  apiSlice.actions;
