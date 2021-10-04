import React from 'react'
import Svg, { Path } from 'react-native-svg'

const AdminIcon = (props) => {
  return (
    <Svg
      width={props.width || 36}
      height={props.height || 36}
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M24 12a4.5 4.5 0 014.5 4.5v12A4.5 4.5 0 0124 33H10.5A4.5 4.5 0 016 28.5v-12a4.5 4.5 0 014.5-4.5V9.75a6.75 6.75 0 0113.5 0V12zm-13.5 1.5a3 3 0 00-3 3v12a3 3 0 003 3H24a3 3 0 003-3v-12a3 3 0 00-3-3H10.5zm12-1.5V9.75a5.25 5.25 0 10-10.5 0V12h10.5zm-5.25 9a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm0-1.5a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5z'
        fill={props.color || '#fff'}
        fillOpacity={0.886}
      />
    </Svg>
  )
}

export default AdminIcon
