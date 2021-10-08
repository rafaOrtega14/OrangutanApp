import React from 'react'
import Svg, { Path } from 'react-native-svg'

const StatsIcon = (props) => {
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
        d='M4.5 6H6v20.968l8.355-14.473L23.37 17.7l5.422-9.394 1.3.75-6.173 10.693-9.015-5.205L6 29.97V30h3.445l5.809-10.059.75-1.299 1.297.75 7.716 4.455L30 15.216V31.5H4.5V6zm21.066 19.896l-9.015-5.205L11.178 30H28.5v-9.186l-2.934 5.082z'
        fill={props.color || '#fff'}
      />
    </Svg>
  )
}

export default StatsIcon
