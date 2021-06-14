import React from "react";
import PropTypes from "prop-types";

/**
 *
 * A modal component that will show all the details of a particular champ
 *
 * @param {Function} toggleModal - Handler to close modal
 * @param {Object} champDetails - Contains all details (properties) of a particular champ
 */

const ChampDetails = ({ toggleModal, champDetails }) => {
  return (
    <div className="modal-container">
      <div className="hero">
        <div className="image-wrapper">
          <img src={champDetails.big_image_url} alt="champ-image" />
        </div>
        <div className="intro">
          <h2>{champDetails.name}</h2>
        </div>
      </div>
      <div className="description">
        <div className="feature">
          <span className="heading">Armor</span>
          <span className="value">
            {champDetails.armor ? champDetails.armor : "NA"}
            <span className="per-level">
              {champDetails.armorperlevel ? champDetails.armorperlevel : "NA"}
            </span>
          </span>
        </div>
        <div className="feature">
          <span className="heading">Attack Damage</span>
          <span className="value">
            {champDetails.attackdamage ? champDetails.attackdamage : "NA"}
            <span className="per-level">
              {champDetails.attackdamageperlevel}
            </span>
          </span>
        </div>
        <div className="feature">
          <span className="heading">Attack range</span>
          <span className="value">
            {champDetails.attackrange ? champDetails.attackrange : "NA"}
            <span className="per-level">
              {champDetails.attackrangeperlevel
                ? champDetails.attackrangeperlevel
                : "NA"}
            </span>
          </span>
        </div>
        <div className="feature">
          <span className="heading">Attack speed offset</span>
          <span className="value">
            {champDetails.attackspeedoffset
              ? champDetails.attackspeedoffset
              : "NA"}
            <span className="per-level">
              {champDetails.attackspeedperlevel
                ? champDetails.attackspeedperlevel
                : "NA"}
            </span>
          </span>
        </div>
        <div className="feature">
          <span className="heading">Crit</span>
          <span className="value">
            {champDetails.crit ? champDetails.crit : "NA"}
            <span className="per-level">
              {champDetails.critperlevel ? champDetails.critperlevel : "NA"}
            </span>
          </span>
        </div>
        <div className="feature">
          <span className="heading">HP regen</span>
          <span className="value">
            {champDetails.hp ? champDetails.hp : "NA"}
            <span className="per-level">
              {champDetails.hpperlevel ? champDetails.hpperlevel : "NA"}
            </span>
          </span>
        </div>
        <div className="feature">
          <span className="heading">Movespeed</span>
          <span className="value">
            {champDetails.movespeed ? champDetails.movespeed : "NA"}
          </span>
        </div>
        <div className="feature">
          <span className="heading">MP</span>
          <span className="value">
            {champDetails.mp ? champDetails.mp : "NA"}
            <span className="per-level">
              {champDetails.mpperlevel ? champDetails.mpperlevel : "NA"}
            </span>
          </span>
        </div>
        <div className="feature">
          <span className="heading">MP regen</span>
          <span className="value">
            {champDetails.mpregen ? champDetails.mpregen : "NA"}
            <span className="per-level">
              {champDetails.mpregenperlevel
                ? champDetails.mpregenperlevel
                : "NA"}
            </span>
          </span>
        </div>
        <div className="feature">
          <span className="heading">Spellback</span>
          <span className="value">
            {champDetails.spellback ? champDetails.spellback : "NA"}
            <span className="per-level">
              {champDetails.spellbackperlevel
                ? champDetails.spellbackperlevel
                : "NA"}
            </span>
          </span>
        </div>
      </div>
      <div className="close-modal" onClick={toggleModal}></div>
    </div>
  );
};

ChampDetails.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  champDetails: PropTypes.shape({
    big_image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    armor: PropTypes.isRequired,
    armorperlevel: PropTypes.isRequired,
    attackdamage: PropTypes.isRequired,
    attackdamageperlevel: PropTypes.isRequired,
    attackrange: PropTypes.isRequired,
    attackrangeperlevel: PropTypes.isRequired,
    attackspeedoffset: PropTypes.isRequired,
    attackspeedperlevel: PropTypes.isRequired,
    crit: PropTypes.isRequired,
    critperlevel: PropTypes.isRequired,
    hp: PropTypes.isRequired,
    hpperlevel: PropTypes.isRequired,
    movespeed: PropTypes.isRequired,
    mp: PropTypes.isRequired,
    mpperlevel: PropTypes.isRequired,
    mpregen: PropTypes.isRequired,
    mpregenperlevel: PropTypes.isRequired,
    spellback: PropTypes.isRequired,
    spellbackperlevel: PropTypes.isRequired,
  }),
};

export default ChampDetails;
