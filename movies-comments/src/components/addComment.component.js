import React from "react";
import { ADD_COMMENT } from "../utils/querries";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Spinner from "./spinner.component";
import { useDispatch } from "react-redux";
import { setComment } from "../store/movies/movieSlice";

function AddComment({ id }) {
  console.log("AddComment component rendered");

  const [addComment, { loading, error }] = useMutation(ADD_COMMENT);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log("name :", e.target.name.value);
    console.log("comment :", e.target.comment.value);

    addComment({
      variables: {
        comment: {
          name: e.target.name.value,
          text: e.target.comment.value,
          movie_id: { link: id },
        },
      },
    });

    dispatch(
      setComment({
        name: e.target.name.value,
        text: e.target.comment.value,
      })
    );

    e.preventDefault();
  };

  if (loading) return <Spinner />;
  if (error) {
    return `Submission error! ${error.message}`;
  } else {
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="grid justify-start">
        <input
          class="font-medium text-lg rounded p-2 h-10 w-80 mt-4 border border-blue-700"
          placeholder="Add your name"
          type="text"
          name="name"
        />
        <textarea
          class="font-medium text-lg rounded p-2 h-60 w-80 mt-4 border border-blue-700"
          placeholder="Add your comment here..."
          type="text"
          name="comment"
        />
        <button
          class="text-lg text-white bg-blue-700 w-40 h-10 p-2 mt-4 rounded font-medium"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default AddComment;
