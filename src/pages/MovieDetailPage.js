import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails, fetchMovieCast } from '../redux/moviesSlice';

const MovieDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetails, movieCast, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
    dispatch(fetchMovieCast(id));
  }, [dispatch, id]);

  if (status === 'loading') {
    return <div className="text-white text-center mt-8">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-red-500 text-center mt-8">Error: {error}</div>;
  }

  if (!movieDetails) {
    return <div className="text-white text-center mt-8">Movie details not available.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h1 className="text-white text-4xl font-bold mb-4">{movieDetails.title}</h1>
          <p className="text-gray-300 mb-4">{movieDetails.overview}</p>
          <p className="text-gray-300 mb-2">
            <span className="font-bold">Release Date:</span> {movieDetails.release_date}
          </p>
          <p className="text-gray-300 mb-2">
            <span className="font-bold">Rating:</span> {movieDetails.vote_average}
          </p>
          <p className="text-gray-300 mb-2">
            <span className="font-bold">Runtime:</span> {movieDetails.runtime} minutes
          </p>
          <p className="text-gray-300 mb-4">
            <span className="font-bold">Genres:</span>{' '}
            {movieDetails.genres?.map((genre) => genre.name).join(', ')}
          </p>
        </div>
      </div>

      <h2 className="text-white text-2xl font-bold mt-12 mb-4">Cast</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movieCast?.slice(0, 6).map((actor) => (
          <div key={actor.id} className="text-center">
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              className="w-full h-48 object-cover rounded-lg shadow-lg mb-2"
            />
            <p className="text-white font-semibold">{actor.name}</p>
            <p className="text-gray-400 text-sm">{actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetailPage;

 