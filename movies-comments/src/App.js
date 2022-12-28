import "./App.css";
import MovieList from "./components/movieList.component";
import Movie from "./components/movie.component";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index={true} element={<MovieList />} />
      <Route path="/:id" element={<Movie />} />
    </Routes>
  );
}

export default App;
