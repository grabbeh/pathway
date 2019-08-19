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
  let { load, headerColor, title, subtitle, subtitleColor } = props

  return (
    <Flex justifyContent='center'>
      <Box width={[1, 800]} maxWidth={800}>
        <Flex alignItems='center' width={[1, 3 / 4, 1 / 2]} height={500}>
          <Box px={[3, 3, 0]}>
            <LoadAnimation load={load}>
              <Heading color={headerColor}>{title}</Heading>
              <Subtitle color={subtitleColor} html={subtitle} />
            </LoadAnimation>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default ImageHero
