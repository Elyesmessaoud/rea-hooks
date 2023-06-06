import { useState } from "react";
import { moviesData } from "./data";
import { Routes, Route, Navigate } from "react-router-dom";
import Movies from "./components/Movies";
import MovieDetail from "./components/MovieDetail";

function App() {
  const [movieList, setMovieList] = useState(moviesData);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  const addNewMovie = (newMovie) => {
    // setMovieList([...movieList, newMovie]);
    setMovieList((prev) => [...prev, newMovie]);
  };
  return (
    <div className="container">
      <div className="row">
        <Routes>
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route
            path="/movies"
            element={
              <Movies
                rating={rating}
                setRating={setRating}
                title={title}
                setTitle={setTitle}
                addNewMovie={addNewMovie}
                movieList={movieList}
              />
            }
          />
          <Route
            path="/movies/:id"
            element={<MovieDetail movieList={movieList} />}
          />
          <Route
          path="*"
          element={<div className="container">404 page not found</div>}
        />
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
