import React from 'react';
import PropTypes from 'prop-types';

const Card = ({headline, img, author}) => {
  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={img} alt="" />
        </div>
        <span>By {author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  headline: PropTypes.string.isRequired,
  tab: PropTypes.string,
  img: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Card;
