import React from 'react'
import { Heading, Subtitle } from '../typography'
import { BackgroundImage, Box, Flex } from '../general'
import LoadAnimation from '../animations/InitialLoadAnimation'
import { useLoad, useDetectWidth } from '../../hooks'

const ImageHero = props => {
  const { isMobile } = useDetectWidth()
  const load = useLoad()
  return (
    <Flex bg={props.mobileBg} flexWrap='wrap'>
      <Flex bg={props.bg} flex='0 0 20px' />
      {isMobile ? (
        <Box width={1} style={{ flex: '1' }}>
          <BackgroundImage
            backgroundColor={props.mobileBg}
            imageData={props.mobileBackgroundImage}
          >
            <Hero load={load} {...props} />
          </BackgroundImage>
        </Box>
      ) : (
        <Box width={1} style={{ flex: '1' }}>
          <BackgroundImage alt={props.alt} imageData={props.imageData}>
            <Hero load={load} {...props} />
          </BackgroundImage>
        </Box>
      )}
    </Flex>
  )
}

const Hero = props => {
  const {
    load,
    mobileColor,
    headerColor,
    title,
    subtitle,
    subtitleColor
  } = props
  return (
    <Flex justifyContent='center'>
      <Box width={[1, 1, 1200]}>
        <Flex alignItems='center' height={500}>
          <Box width={[1, 3 / 4, 0.5]} px={[3, 4]}>
            <LoadAnimation load={load}>
              <Heading color={[mobileColor, headerColor]}>{title}</Heading>
              <Subtitle color={subtitleColor} html={subtitle} />
            </LoadAnimation>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default ImageHero
