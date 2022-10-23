import React from "react";
import PropTypes from "prop-types";
import "../styles/card.css";

const Card = ({card: {id, name, email}}) => (

    <div className="card-container">
        <img
            alt="monster"
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
);

export default Card;

Card.propTypes = {
    card: PropTypes.object.isRequired,
};
