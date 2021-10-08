import React from 'react'
import Svg, { Path } from 'react-native-svg'

const HomeIcon = (props) => {
  return (
    <Svg
      width={props.width || 36}
      height={props.height || 36}
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Path
        d='M33.71 17.29l-15-15a1 1 0 00-1.41 0l-15 15a1 1 0 001.41 1.41L18 4.41l14.29 14.3a1 1 0 001.41-1.41l.01-.01z'
        fill={props.color || '#fff'}
      />
      <Path
        d='M28 32h-5V22H13v10H8V18l-2 2v12a2 2 0 002 2h7V24h6v10h7a2 2 0 002-2V19.76l-2-2V32z'
        fill={props.color || '#fff'}
      />
    </Svg>
  )
}

export default HomeIcon
