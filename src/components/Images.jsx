import React from 'react'

export default function Images(props) {
  return (
    <div>
        <img className='picCard' src={`pics/${props.imageSrc}.png`} alt={props.imageSrc} />
    </div>
  )
}
