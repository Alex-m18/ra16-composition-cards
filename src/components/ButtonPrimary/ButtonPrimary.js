import React from 'react'
import PropTypes from 'prop-types'

function ButtonPrimary(props) {
  return (
    <a href={props.href} className="btn btn-primary">{props.text}</a>
  )
}

ButtonPrimary.defaultProps = {
  href: '#',
  text: 'Go somewhere',
}

ButtonPrimary.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
}

export default ButtonPrimary

