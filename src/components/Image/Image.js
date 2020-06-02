import React from 'react'
import PropTypes from 'prop-types'

function Image(props) {
  return <React.Fragment>
    { props.src && <img src={props.src} className="card-img-top" alt="..."/> }
  </React.Fragment>
}

Image.propTypes = {
  src: PropTypes.string,
}

export default Image

