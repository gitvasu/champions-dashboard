import React, { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Header (A simple Pure component)
 *
 * @param {Number} watchCount - Number of champs added to watch list
 */

const Header = ({ watchCount }) => {
  console.log("Header rendered");
  return (
    <div id="header">
      <Link to="/dashboard">
        <span id="logo">
          Champions dashboard<i className="champ-icon fas fa-gamepad"></i>
        </span>
      </Link>
      <Link to="/watchlist">
        Watchlist <span id="watchlist-count">{watchCount}</span>
      </Link>
    </div>
  );
};

Header.propTypes = {
  watchCount: PropTypes.number.isRequired,
};

const MemoizedHeader = memo(Header);

export default MemoizedHeader;
