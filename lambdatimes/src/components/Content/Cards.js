import React from 'react';


import Card from './Card';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;

@media (min-width: 1200px) {
    width: 1200px;
`

const Cards = props => {
  return (
    <CardContainer>
      {props.cards.map(card => {
        return (
          <Card
            card={card}
          />
        )
        })}
    </CardContainer>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  )
}

export default Cards;