import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

const Cards = ({cards}) => {
  return (
    <CardsContainer>
      {cards.map(card => <Card {...card} key={card.headline} />)}
    </CardsContainer>
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

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

export default Cards;
