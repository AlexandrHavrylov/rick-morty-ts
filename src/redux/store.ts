import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "./RickAndMorty/api-slice";

export const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
  },

  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch