import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: {},
  comments: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload.movie;
      state.comments = action.payload.comments;
    },
    setComment: (state, action) => {
      state.comments.push(action.payload);
    },
    removeComment: (state, action) => {
      console.log("removeComment payload:", action.payload);

      state.comments = state.comments.filter(
        (comment) => comment._id !== action.payload
      );
    },
  },
});

export const { setMovie, setComment, removeComment } = movieSlice.actions;

export default movieSlice.reducer;
