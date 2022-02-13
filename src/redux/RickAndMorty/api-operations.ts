import { RootState } from './../store';
import { TCharacter, TFindParams, IState } from './../types';
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
axios.defaults.baseURL = "https://rickandmortyapi.com/api";



export const fetchCharacters = createAsyncThunk<TCharacter[], TFindParams, {}>(
  "api/get",
  async (credentials, thunkAPI) => {
    const page = thunkAPI.getState().api.curentPage;

    try {
      const { data } = await axios.get(
        `/character/?page=${page}&name=${credentials.name}&gender=${credentials.gender}&status=${credentials.status}`
      );

      return data.results;
    } catch (error) {
      toast.error("Nothing was found. Please change search params");
      return thunkAPI.rejectWithValue("Не удалось ничего найти");
    }
  }
);
