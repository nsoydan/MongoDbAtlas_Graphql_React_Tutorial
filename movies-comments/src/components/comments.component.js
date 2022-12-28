import React from "react";
import Spinner from "./spinner.component";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_COMMENT } from "../utils/querries";
import { useMutation } from "@apollo/client";
import { removeClientSetsFromDocument } from "@apollo/client/utilities";
import { removeComment } from "../store/movies/movieSlice";

function Comments() {
  const comments = useSelector((state) => state.movie.comments);

  const dispatch = useDispatch();
  const [deleteComment, { loading, error }] = useMutation(DELETE_COMMENT);
  console.log("comments component rendered....", comments);

  const handleOnClick = (id) => {
    deleteComment({
      variables: {
        id: id,
      },
    });

    dispatch(removeComment(id));
  };

  if (loading) return <Spinner />;
  if (error) return ` Error ! ${error} `;

  return (
    <div>
      <h1 class="text-2xl">COMMENTS</h1>

      {comments &&
        comments.map((comment) => (
          <div key={comment._id}>
            <h1 class="text-sm font-bold">{comment.date}</h1>
            <p class="text-lg text-orange-500">{comment.text}</p>
            <p class="text-lg text-orange-500">{comment._id}</p>

            <h3 class="text-base">{comment.name}</h3>
            <span>----------------------------</span>
            <button
              onClick={() => handleOnClick(comment._id)}
              class="h-10 w-16 border-spacing-1 rounded-lg text-white bg-orange-400"
            >
              Sil
            </button>
          </div>
        ))}
    </div>
  );
}

export default Comments;
