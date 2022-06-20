import { createSlice } from "@reduxjs/toolkit";

export const shortenerSlice = createSlice({
  name: "shortener",
  initialState: {
    shortenedUrls: [],
    isLoading: false,
  },
  reducers: {
    saveShortenedUrl: (state, action) => {
      state.shortenedUrls = [...state.shortenedUrls, action.payload];
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    deleteShortenedUrl: (state, action) => {
      const array = [...state.shortenedUrls];
      const index = action.payload;
      array.splice(index, 1);
      state.shortenedUrls = array;
    },
  },
});

export function shortenUrl() {}

// ...
