import React from "react";
import { useDispatch } from "react-redux";
import Spinner from "./spinner.component";
import { useQuery } from "@apollo/client";
import { setMovies } from "../store/movies/moviesSlice";
import { Link } from "react-router-dom";
import { GET_MOVIES } from "../utils/querries";

function MovieList() {
  //const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  const { loading, data, error } = useQuery(GET_MOVIES);
  console.log("response data:", data);

  if (data) {
    dispatch(setMovies(data.movies));
  }

  if (loading) {
    return <Spinner />;
  }
  if (error) return `Error! ${error}`;

  return (
    <div class="grid grid-cols-2 gap-4 m-4 ">
      {data.movies.map((movie) => (
        <div key={movie._id}>
          <div class="flex justify-center  ">
            <Link
              to={movie._id}
              class="flex flex-col md:flex-row md:max-w-xl w-s rounded-lg cursor-pointer bg-red-200 shadow-lg"
            >
              <img
                class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src={movie.poster}
                alt=""
              />
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  {movie.title}
                </h5>
                <p class="text-gray-700 text-base mb-4">{movie.fullplot}</p>
                <p class="text-gray-600 text-xs">
                  {movie.cast.map((item) => (
                    <span>{item},</span>
                  ))}
                </p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
