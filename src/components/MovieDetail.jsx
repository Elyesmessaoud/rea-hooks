import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate , Navigate } from "react-router-dom";

const MovieDetail = ({ movieList }) => {
  const { id } = useParams();
  const movie = movieList.find((movie) => movie.id == id);
  const navigate = useNavigate();
  console.log(movie);
  if (!movie){
    return <Navigate to="/not-found" /> 
  }
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description} </p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <button className="btn btn-dark" onClick={() => navigate("/movies")}>
        Go Back
      </button>
    </div>
  );
};

export default MovieDetail;
