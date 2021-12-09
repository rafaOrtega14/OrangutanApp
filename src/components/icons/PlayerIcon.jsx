import React from 'react'
import Svg, { Path } from 'react-native-svg'

const PlayerIcon = (props) => {
  return (
    <Svg
      width={props.width || 36}
      height={props.height || 36}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M17.25 24c6.213 0 11.25 2.35 11.25 5.25V33H6v-3.75C6 26.35 11.037 24 17.25 24zM27 29.25c0-2.07-4.365-3.75-9.75-3.75S7.5 27.18 7.5 29.25v2.25H27v-2.25zM17.25 10.5a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z'
        fill='#fff'
      />
    </Svg>
  )
}

export default PlayerIcon
