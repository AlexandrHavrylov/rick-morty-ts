import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { TCharacter, TFindParams, IState } from "./../types";
import { RootState } from "./../store";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export const fetchCharacters = createAsyncThunk<TCharacter[], TFindParams>(
  "api/get",
  async (credentials, thunkAPI) => {
    const { api } = thunkAPI.getState() as { api: IState };
    try {
      const { data } = await axios.get(
        `/character/?page=${api.curentPage}&name=${credentials.name}&gender=${credentials.gender}&status=${credentials.status}`
      );
      return data.results as TCharacter[];
    } catch (error) {
      toast.error("Nothing was found. Please change search params");
      return thunkAPI.rejectWithValue("Не удалось ничего найти");
    }
  }
);
