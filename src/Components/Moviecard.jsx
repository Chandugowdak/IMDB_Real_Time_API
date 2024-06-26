import React from 'react';

const MovieCard = ({ poster_path, title, handlingmovie, MovieObject, MoviRemover, watechlater }) => {
  const baseURL = 'https://image.tmdb.org/t/p/original';

  function Checkwatchlist(MovieObject) {
    for (let i = 0; i < watechlater.length; i++) {
      if (watechlater[i].id === MovieObject.id) {
        return true;
      }
    }
    return false; // Moved outside of the loop
  }

  return (
    <div>
      <style>
        {`
          .card-img-top:hover {
            transform: scale(0.95);
            transition: transform 0.1s ease;
          }
        `}
      </style>

      <div className="card p-2 m-3" style={{ width: "18rem" }}>
        <img src={`${baseURL}${poster_path}`} className="card-img-top" alt="Movie Poster" />
        <div className="card-body">
          <p className="card-text text-center fs-6 fw-bold lead">{title}</p>
          {Checkwatchlist(MovieObject) ? (
            <div onClick={() => MoviRemover(MovieObject)} className='d-flex justify-content-center align-center btn btn-info'>
              Remove-Movie
            </div>
          ) : (
            <div onClick={() => handlingmovie(MovieObject)} className='d-flex justify-content-center align-center btn btn-info'>
              Watch-Later
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
