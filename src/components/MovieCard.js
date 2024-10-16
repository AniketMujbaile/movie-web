import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="block">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-white font-bold text-lg mb-2">{movie.title}</h3>
          <p className="text-gray-400">Rating: {movie.vote_average}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;