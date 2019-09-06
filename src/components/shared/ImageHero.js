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
        <Hero style={{ flex: '1' }} load={load} {...props} />
      ) : (
        <BackgroundImage imageData={props.imageData} style={{ flex: '1' }}>
          <Hero load={load} {...props} />
        </BackgroundImage>
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
      <Box mx={[0, 5]} width={1}>
        <Flex
          justifyContent={[null, null, 'center']}
          alignItems='center'
          height={500}
        >
          <Box width={[1, 3 / 4, 1000]} px={[3, 3, 0]}>
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
