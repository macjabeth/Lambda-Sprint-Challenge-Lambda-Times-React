import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = ({cards}) => {
  return (
    <div className="cards-container">
      {cards.map(card => <Card {...card} key={card.headline} />)}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }))
}

export default Cards;
