import React from 'react'
import Svg, { Path } from 'react-native-svg'

const CalendarIcon = (props) => {
  return (
    <Svg
      width={props.width || 40}
      height={props.height || 40}
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M10.5 3H12a1.5 1.5 0 011.5 1.5V6H21V4.5A1.5 1.5 0 0122.5 3H24a1.5 1.5 0 011.5 1.5V6a4.5 4.5 0 014.5 4.5V27a4.5 4.5 0 01-4.5 4.5H9A4.5 4.5 0 014.5 27V10.5A4.5 4.5 0 019 6V4.5A1.5 1.5 0 0110.5 3zm12 3H24V4.5h-1.5V6zM12 6V4.5h-1.5V6H12zM9 7.5a3 3 0 00-3 3V12h22.5v-1.5a3 3 0 00-3-3H9zM6 27a3 3 0 003 3h16.5a3 3 0 003-3V13.5H6V27zm12-7.5h7.5V27H18v-7.5zm1.5 1.5v4.5H24V21h-4.5z'
        fill={props.color || '#fff'}
      />
    </Svg>
  )
}

export default CalendarIcon
