import { configureStore } from "@reduxjs/toolkit";
import shortenerReducer from "./features/urlShortener/shortenerSlice";

const store = configureStore({
  reducer: {
    shortener: shortenerReducer,
  },
});

export default store;
