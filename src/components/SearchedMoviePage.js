import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies, clearSearchedMovies } from '../redux/moviesSlice';
import MovieCard from './MovieCard';
import Pagination from './Pagination';

const SearchedMoviePage = () => {
  const dispatch = useDispatch();
  const { searchedMovies, totalPages, status, error } = useSelector((state) => state.movies);

  const query = new URLSearchParams(window.location.search).get('query');
  
  // State for handling the current page
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (query) {
      dispatch(searchMovies({ query, page: currentPage }));
    }

    // Clean up function to reset searched movies
    return () => {
      dispatch(clearSearchedMovies());
    };
  }, [dispatch, query, currentPage]);  

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);  
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchedMovies.length > 0 ? (
          searchedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <div>No results found</div>
        )}
      </div>
      
      {totalPages > 1 && (
        <Pagination 
          totalPages={totalPages} 
          currentPage={currentPage} 
          onPageChange={handlePageChange}  
        />
      )}
    </div>
  );
};

export default SearchedMoviePage;

 