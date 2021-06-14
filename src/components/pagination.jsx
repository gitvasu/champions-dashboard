import React from "react";
import PropTypes from "prop-types";

/**
 * Component for showing page numbers and navigation links
 * @param {Number} champsPerPage - Number of champs to be shown per page
 * @param {Number} totalChamps - Total number of champs fetched from API
 * @param {Function} paginate - Sets current page number and champs to show at this page
 * @param {Number} currentPage - Indicates current page number
 */

const Pagination = ({ champsPerPage, totalChamps, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalChamps / champsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${
              number === currentPage && "current-page-item"
            }`}
          >
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  champsPerPage: PropTypes.number,
  totalChamps: PropTypes.number,
  paginate: PropTypes.func,
  currentPage: PropTypes.number,
};

export default Pagination;
