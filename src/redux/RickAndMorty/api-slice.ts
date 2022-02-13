import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TCharacter } from "./../types";
import { fetchCharacters } from "./api-operations";
import { IState, TFindParams } from "../types.js";

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state: IState, _) => {
        state.isLoading = true;
      })
      .addCase(
        fetchCharacters.fulfilled,
        (state: IState, action: PayloadAction<TCharacter[]>) => {
          state.characters = [...state.characters, ...action.payload];
          state.isLoading = false;
        }
      )
      .addCase(fetchCharacters.rejected, (state: IState, _) => {
        state.isLoading = false;
      });
  },
});

export const { setPage, setCharacterToFind, resetCharacters, setFilter } =
  apiSlice.actions;
