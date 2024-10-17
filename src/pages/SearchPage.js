import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../redux/moviesSlice';
import MovieGrid from '../components/MovieGrid';
import Pagination from '../components/Pagination';

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();  
  const dispatch = useDispatch();
  const { searchedMovies, status, error, totalPages } = useSelector((state) => state.movies);
  const [currentPage, setCurrentPage] = useState(1);

  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (query) {
      dispatch(searchMovies({ query, page: currentPage }));
    }
  }, [dispatch, query, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
    navigate(`?query=${query}&page=${newPage}`);
  };

  if (status === 'loading') {
    return <div className="text-white text-center mt-8">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-red-500 text-center mt-8">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-white text-3xl font-bold mb-8">Search Results for "{query}"</h1>
      {searchedMovies.length > 0 ? (
        <>
          <MovieGrid movies={searchedMovies} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <p className="text-white text-center">No results found for "{query}"</p>
      )}
    </div>
  );
};

export default SearchPage;

 