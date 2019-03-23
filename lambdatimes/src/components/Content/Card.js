import React from 'react';

import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardClass = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;

headline {
  font-size: 25px;
  font-family: Didot, serif;
}

author {
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
}

img-container {
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
}

img {
  width: 40px;
}

author-span {
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
}
`

const Card = props => {
  return (
    <CardClass>
      <headline>{props.card.headline}</headline>
      <author>
        <img-container>
          <img src={props.card.img} alt="Author Thumbnail" />
        </img-container>
        <author-span>By {props.card.author}</author-span>
      </author>
    </CardClass>
  );
};


Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })
}

export default Card;
