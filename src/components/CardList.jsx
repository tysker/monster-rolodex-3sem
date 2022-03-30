import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import "../styles/card-list.css";

const CardList = ({ cardList }) => {
  return (
    <div className="card-list">
      {cardList.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;

CardList.propTypes = {
  cardList: PropTypes.array.isRequired,
};
