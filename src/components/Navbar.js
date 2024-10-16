import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();


  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
       navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-white text-2xl font-bold">MovieDb</a>

          {/* Hamburger Menu Icon (for very small screens) */}
          <button onClick={toggleMenu} className="sm:hidden text-white">
            <span className={`block w-6 h-0.5 bg-white mb-1 transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mb-1 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          {/* Links + Search bar */}
          <div className={`${menuOpen ? 'block' : 'hidden'} sm:flex flex-grow items-center w-full sm:w-auto sm:flex-grow-0 mt-4 sm:mt-0`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0">
                <a href="/popular" className="text-white hover:text-gray-300">Popular</a>
                <a href="/top-rated" className="text-white hover:text-gray-300">Top Rated</a>
                <a href="/upcoming" className="text-white hover:text-gray-300">Upcoming</a>
              </div>
            </div>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex mt-4 sm:mt-0 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Movie Name"
              className="px-2 py-1 rounded-l w-full sm:w-auto"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded-r hover:bg-blue-600">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
 