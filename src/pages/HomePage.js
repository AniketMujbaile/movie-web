import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { fetchPopularMovies } from '../redux/moviesSlice';
import MovieGrid from '../components/MovieGrid';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const dispatch = useDispatch();
  const { popular, status, error, totalPages } = useSelector((state) => state.movies);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPopularMovies({ type: 'popular', page: currentPage }));
  }, [dispatch, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };

  if (status === 'loading') {
    return <div className="text-white text-center mt-8">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-red-500 text-center mt-8">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-white text-3xl font-bold mb-8">Popular Movies</h1>
      <MovieGrid movies={popular} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;