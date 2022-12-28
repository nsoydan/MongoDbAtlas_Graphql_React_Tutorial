import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query {
    movies {
      _id
      title
      fullplot
      poster
      cast
      imdb {
        rating
      }
    }
  }
`;

export const GET_MOVIE = gql`
  query ($movie_id: ObjectId) {
    movie(query: { _id: $movie_id }) {
      _id
      title
      poster
      fullplot
      cast
    }
    comments(
      query: { movie_id: { _id: $movie_id } }
      limit: 50
      sortBy: DATE_DESC
    ) {
      _id
      name
      date
      text
    }
  }
`;

export const GET_COMMENTS = gql`
  query ($id: ObjectId) {
    comments(_id: $id) {
      _id
      text
      name
      date
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($comment: CommentInsertInput!) {
    insertOneComment(data: $comment) {
      _id
      name
      date
      email
      text
      movie_id {
        _id
      }
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation removeComment($id: ObjectId) {
    deleteOneComment(query: { _id: $id }) {
      _id
    }
  }
`;
