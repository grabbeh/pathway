import React from 'react'
import Heading from '../general/Heading'
import Flex from '../general/Flex'
import Box from '../general/Box'
import Subtitle from '../typography/Subtitle'
import BackgroundImage from '../general/BackgroundImage'
import LoadAnimation from '../animations/InitialLoadAnimation'
import useLoad from '../../hooks/useLoad'
import useDetectWidth from '../../hooks/useDetectWidth'

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
          <BackgroundImage imageData={props.imageData}>
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
          <Box width={[1, 3 / 4, 1 / 2]} px={[3, 4]}>
            <LoadAnimation load={load}>
              <Box width={[1, 1, 0.6]}>
                <Heading color={[mobileColor, headerColor]}>{title}</Heading>
              </Box>
              <Box width={[1, 1, 0.5]}>
                <Subtitle html={subtitle} color={subtitleColor} />
              </Box>
            </LoadAnimation>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default ImageHero
