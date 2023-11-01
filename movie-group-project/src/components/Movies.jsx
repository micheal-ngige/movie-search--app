import React from "react";

export default function Movies({ moviesData }) {
  return (
    <div>
      {moviesData.map((movie) => (
        <div key={movie.id}>
          <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
          <h1>{movie.original_title}</h1>
          <p>{movie.overview}</p>
          <h4>{movie.vote_average}</h4>
        </div>
      ))}
    </div>
  );
}
