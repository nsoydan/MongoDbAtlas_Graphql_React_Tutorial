import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import moviesReducer from "./movies/moviesSlice";
import movieReducer from "./movies/movieSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movie: movieReducer,
  },
  middleware: [logger],
});
