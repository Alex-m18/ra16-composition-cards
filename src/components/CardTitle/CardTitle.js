import React from 'react'
import PropTypes from 'prop-types'

function CardTitle(props) {
  return <h5 className="card-title">{props.text}</h5>;
}

CardTitle.defaultProps = {
  text: 'Card title',
}

CardTitle.propTypes = {
  text: PropTypes.string,
}

export default CardTitle
