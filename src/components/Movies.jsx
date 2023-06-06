import React from 'react'
import Filter from "./Filter";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

const Movies = ({rating ,setRating,title,setTitle,addNewMovie,movieList}) => {
  return (
    <div className="col-md-6 offset-md-3">
    <Filter
      rating={rating}
      setRating={setRating}
      title={title}
      setTitle={setTitle}
    />
    <AddMovie addNewMovie={addNewMovie} />
    <MovieList
      movieList={movieList}
      rating={rating}
      title={title}
    />
  </div>
  )
}

export default Movies