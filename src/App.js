import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import PopularPage from './pages/HomePage';
import TopRatedPage from './pages/TopRatedPage';
import UpcomingPage from './pages/UpcomingPage';
import MovieDetailPage from './pages/MovieDetailPage';
import Navbar from './components/Navbar';
import SearchedMoviePage from './components/SearchedMoviePage';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />

          {/* Popular Movies Route */}
          <Route path="/popular" element={<PopularPage />} />

          {/* Top Rated Movies Route */}
          <Route path="/top-rated" element={<TopRatedPage />} />

          {/* Upcoming Movies Route */}
          <Route path="/upcoming" element={<UpcomingPage />} />

          {/* Movie Details Route */}
          <Route path="/movie/:id" element={<MovieDetailPage />} />
                    
          {/* Search Movies Route */}
          <Route path="/search" element={<SearchedMoviePage />} />

          {/* Catch-all Route */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
  