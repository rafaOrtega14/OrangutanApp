import React from 'react'
import Svg, { Path } from 'react-native-svg'

function ChevronRightIcon (props) {
  return (
    <Svg
      width={props.width || 36}
      height={props.height || 36}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M12.89 27.235l8.485-8.485-8.486-8.486-1.06 1.061 7.425 7.425-7.425 7.425 1.06 1.06z'
        fill='#fff'
      />
    </Svg>
  )
}

export default ChevronRightIcon
