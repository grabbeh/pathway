import React from 'react'
import Heading from '../general/Heading'
import Flex from '../general/Flex'
import Box from '../general/Box'
import Subtitle from '../typography/Subtitle'
import BackgroundImage from '../general/BackgroundImage'
import LoadAnimation from '../animations/InitialLoadAnimation'
import useLoad from '../../hooks/useLoad'

const ImageHero = ({
  bg,
  headerColor,
  subtitleColor,
  imageData,
  title,
  subtitle
}) => {
  let load = useLoad()
  return (
    <Flex flexWrap='wrap'>
      <Flex bg={bg} flex='0 0 20px' />
      <BackgroundImage imageData={imageData} style={{ flex: '1' }}>
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
      </BackgroundImage>
    </Flex>
  )
}

export default ImageHero
