import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-blue-500 text-white px-4 py-2 rounded-l disabled:bg-gray-400"
      >
        Previous
      </button>
      <span className="bg-white text-gray-800 px-4 py-2">
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-blue-500 text-white px-4 py-2 rounded-r disabled:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;