import React, { useState } from "react";
import Modal from "react-modal";
import ChampDetails from "./champDetails";
import PropTypes from "prop-types";

const ChampCard = ({ champ, addToWatchList, inWatchList }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <div className="champ-card">
      <img className="champ-img" src={champ["image_url"]} alt={champ["name"]} />
      <p className="champ-name" onClick={toggleModal}>
        {champ["name"]}
      </p>
      <input
        type="checkbox"
        name={champ["name"]}
        className="add-to-watch"
        value={champ["id"]}
        onChange={addToWatchList}
        checked={inWatchList}
        id={champ["id"]}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        contentLabel="Champ info"
      >
        <ChampDetails toggleModal={toggleModal} champDetails={champ} />
      </Modal>
    </div>
  );
};

Modal.setAppElement("#root");

ChampCard.propTypes = {
  champ: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    id: PropTypes.isRequired,
  }).isRequired,
  addToWatchList: PropTypes.func.isRequired,
  inWatchList: PropTypes.bool.isRequired,
};

export default ChampCard;
