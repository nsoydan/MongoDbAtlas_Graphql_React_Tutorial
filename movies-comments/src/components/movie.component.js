import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Spinner from "./spinner.component";
import { GET_MOVIE } from "../utils/querries";
import AddComment from "./addComment.component";
import Comments from "./comments.component";
import { useDispatch } from "react-redux";
import { setMovie } from "../store/movies/movieSlice";

function Movie() {
  const dispatch = useDispatch();
  console.log("movie component rendered...");
  const params = useParams();

  const { loading, data, error } = useQuery(GET_MOVIE, {
    variables: {
      movie_id: params.id,
    },
  });

  if (data) {
    console.log("data:", data);
    dispatch(setMovie(data));
  }

  if (loading) {
    console.log("UseQuerry(GET_MOVİE ÇALIŞTI...)");

    return <Spinner />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <div class="flex justify-center items-center flex-col gap-2 mt-8 ">
        <div class="flex flex-col md:flex-row md:max-w-xl w-s rounded-lg cursor-pointer bg-red-200 shadow-lg">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={data.movie.poster}
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              {data.movie.title}
            </h5>
            <p class="text-gray-700 text-base mb-4">{data.movie.fullplot}</p>
            <p class="text-gray-600 text-xs">
              CAST:
              {data.movie.cast.map((item) => (
                <span>{item},</span>
              ))}
            </p>
          </div>
        </div>

        <Comments />

        <AddComment id={params.id} />
      </div>
    </>
  );
}

export default Movie;
