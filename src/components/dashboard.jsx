import React, { useState } from "react";
import ChampsGrid from "./champsGrid";
import Pagination from "./pagination";
import { objIsEmpty } from "../utils/utilityFunc";
import PropTypes from "prop-types";
import WithLoader from "./withLoader";

const ChampsGridWithLoading = WithLoader(ChampsGrid);

/**
 * Dashboard component to list, search, sort, add to favorite champs list
 * @param {Array} champs - List of all champions fetched from Pandascore
 * @param {Function} handleWatchList - Add champ to watchlist handler
 * @param {Function} changeSortOrder - Handler to change sort order of champs grid
 * @param {Object} sortOrder - Order in which champions must be sorted or not
 * @param {Boolean} isLoading - Indicates if the champs list is getting fetched via api
 */

const Dashboard = ({
  champs,
  handleWatchList,
  changeSortOrder,
  sortOrder,
  isLoading,
}) => {
  const champsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  let indexOfFirstChamp;
  let indexOfLastChamp;
  let currentChamps;
  let champsCount;

  if (searchText.trim()) {
    currentChamps = champs.filter((champ) =>
      champ["name"].toLowerCase().includes(searchText.toLowerCase())
    );
    champsCount = currentChamps.length;
    indexOfLastChamp = currentPage * champsPerPage;
    indexOfFirstChamp = indexOfLastChamp - champsPerPage;
    currentChamps = currentChamps.slice(indexOfFirstChamp, indexOfLastChamp);
  } else {
    champsCount = champs.length;
    // Get champs on current page
    indexOfLastChamp = currentPage * champsPerPage;
    indexOfFirstChamp = indexOfLastChamp - champsPerPage;
    currentChamps = champs.slice(indexOfFirstChamp, indexOfLastChamp);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleSearchChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    setCurrentPage(1);
  }

  return (
    <>
      <div className="champs-grid-container container">
        <h1>League of legends champions</h1>
        <div className="searchbox">
          <i className="fa fa-search"></i>
          <input
            type="text"
            className="search-champs-input"
            placeholder="Search champion by name"
            onChange={handleSearchChange}
            value={searchText}
          />
          <div className="sort-results" onClick={changeSortOrder}>
            <span className="sort-criteria">Sort by name</span>
            {!objIsEmpty(sortOrder) && (
              <i
                className={`fas fa-sort-alpha-${
                  sortOrder.order === "asc" ? "up" : "down-alt"
                }`}
              />
            )}
          </div>
        </div>
        <ChampsGridWithLoading
          isLoading={isLoading}
          champs={currentChamps}
          addToWatchList={handleWatchList}
        />
        {/* <ChampsGrid
          champs={currentChamps}
          addToWatchList={handleWatchList}
        /> */}
        <Pagination
          champsPerPage={champsPerPage}
          totalChamps={champsCount}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

Dashboard.propTypes = {
  /**
   * List of all champions fetched from Pandascore
   */
  champs: PropTypes.array.isRequired,
  /**
   * Order in which champions must be sorted or not
   */
  sortOrder: PropTypes.shape({
    order: PropTypes.any,
  }),
  /**
   * Handler for adding a champ to watchlist
   */
  handleWatchList: PropTypes.func.isRequired,
  /**
   * Handler for changing the sort order
   */
  changeSortOrder: PropTypes.func.isRequired,
  /**
   * Indicates if the champs list is getting fetched via api
   */
  isLoading: PropTypes.any.isRequired,
};

export default Dashboard;
