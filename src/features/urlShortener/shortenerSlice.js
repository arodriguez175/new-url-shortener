import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export function shortenUrl(originalUrl) {
  return async (dispatch) => {
    const url = `https://api.shrtco.de/v2/shorten?url=${originalUrl}`;

    dispatch(setLoading(true));

    axios
      .post(url)
      .then((response) => {
        const data = response.data;
        const shortenedUrlObject = {
          originalUrl: originalUrl,
          shortenedUrl: data.result.full_short_link,
        };

        dispatch(saveShortenedUrl(shortenedUrlObject));
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export const { saveShortenedUrl, setLoading, deleteShortenedUrl } =
  shortenerSlice.actions;

export default shortenerSlice.reducer;
