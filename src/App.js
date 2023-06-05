import { useState } from 'react';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import { moviesData } from './data';
function App() {
  const [movieList, setMovieList] = useState(moviesData);
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);

  const addNewMovie = newMovie => {
    // setMovieList([...movieList, newMovie]);
    setMovieList(prev => [...prev, newMovie]);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Filter
            rating={rating}
            setRating={setRating}
            title={title}
            setTitle={setTitle}
          />
          <AddMovie addNewMovie={addNewMovie} />
          <MovieList movieList={movieList} rating={rating} title={title} />
        </div>
      </div>
    </div>
  );
}

export default App;