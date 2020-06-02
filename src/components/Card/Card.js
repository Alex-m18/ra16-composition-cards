import React from 'react'
import Image from '../Image/Image'
import CardBody from '../CardBody/CardBody'

function Card({ img, ...props }) {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <Image src={img}/>
      <CardBody>
        {props.children}
      </CardBody>
    </div>
  )
}

export default Card

