import React from "react";
import ChampCard from "./champCard";
import PropTypes from "prop-types";

/**
 * Grid component to show champs of particular page
 *
 * @param {Array} champs - List of champs on this particular page fetched from API
 * @param {Function} addToWatchList - Handler to add champ to watchlist
 */

const ChampsGrid = ({ champs, addToWatchList }) => {
  return (
    <div id={"grid-id"} className={`champs-grid`}>
      {champs.map((champ) => (
        <ChampCard
          key={champ["id"]}
          champ={champ}
          addToWatchList={addToWatchList}
          inWatchList={champ.inWatchList}
        />
      ))}
    </div>
  );
};

ChampsGrid.propTypes = {
  champs: PropTypes.array,
  addToWatchList: PropTypes.func,
};

export default ChampsGrid;
