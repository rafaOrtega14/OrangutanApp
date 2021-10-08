import React, { useState, useEffect } from 'react'
import { Dimensions, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import styles from './CarouselContainerStyles'

const { width: screenWidth } = Dimensions.get('window')

const CarouselContainer = ({ players, activeIndex, setActiveIndex, sortBy }) => {
  const [carousel, setCarousel] = useState(null)

  useEffect(() => {
    if (carousel) carousel.snapToItem(0, true)
  }, [sortBy])

  return (
    <Carousel
      ref={c => { setCarousel(c) }}
      layout='default'
      inactiveSlideOpacity={0.8}
      activeAnimationType='timing'
      data={players}
      sliderWidth={screenWidth}
      itemWidth={screenWidth - 170}
      renderItem={({ item, index }) => {
        return (
          <Image
            style={styles.card}
            source={{ uri: item.photo }}
          />
        )
      }}
      onSnapToItem={(index) => setActiveIndex(index)}
    />
  )
}

export default CarouselContainer
