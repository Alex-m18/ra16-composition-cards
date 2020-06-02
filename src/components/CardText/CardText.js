import React from 'react'
import PropTypes from 'prop-types'

function CardText(props) {
  return <p className="card-text">{props.text}</p>
}

CardText.propTypes = {
  text: PropTypes.string.isRequired,
}

export default CardText
