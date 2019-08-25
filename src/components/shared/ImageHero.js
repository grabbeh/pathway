import React from 'react'
import Heading from '../general/Heading'
import Flex from '../general/Flex'
import Box from '../general/Box'
import Subtitle from '../typography/Subtitle'
import BackgroundImage from '../general/BackgroundImage'
import LoadAnimation from '../animations/InitialLoadAnimation'
import useLoad from '../../hooks/useLoad'
import useDetectMobile from '../../hooks/useDetectMobile'

const ImageHero = props => {
  let mobile = useDetectMobile()
  let load = useLoad()
  return (
    <Flex bg={props.mobileBg} flexWrap='wrap'>
      <Flex bg={props.bg} flex='0 0 20px' />
      {mobile ? (
        <Hero load={load} {...props} />
      ) : (
        <BackgroundImage imageData={props.imageData} style={{ flex: '1' }}>
          <Hero load={load} {...props} />
        </BackgroundImage>
      )}
    </Flex>
  )
}

const Hero = props => {
  let { load, mobileColor, headerColor, title, subtitle, subtitleColor } = props
  return (
    <Flex justifyContent='center'>
      <Box mx={[0, 5]} width={[1, 1, 1000]}>
        <Flex alignItems='center' width={[1, 3 / 4, 1 / 2]} height={500}>
          <Box px={[3, 3, 0]}>
            <LoadAnimation load={load}>
              <Heading color={[mobileColor, headerColor]}>{title}</Heading>
              <Subtitle html={subtitle} color={subtitleColor} />
            </LoadAnimation>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default ImageHero
