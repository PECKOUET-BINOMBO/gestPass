import React from "react";

function Pagination({ itemsPerPage, totalItems, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="flex items-center justify-center -space-x-px h-8 text-sm mt-4">
        <li>
          <button
            onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`flex items-center justify-center px-3 h-8 leading-tight ${
                currentPage === number
                  ? "text-red-600 border border-red-300 bg-red-50 hover:bg-red-100 hover:text-red-700"
                  : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => paginate(currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length)}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;