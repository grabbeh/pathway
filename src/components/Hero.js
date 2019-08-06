import React from 'react'
import Heading from './Heading'
import Flex from './Flex'
import Box from './Box'
import Text from './Text'
import BackgroundImage from './BackgroundImage'

const Hero = () => (
  <Flex flexWrap='wrap'>
    <Flex bg='green' flex='0 0 20px' />
    <BackgroundImage style={{ flex: '1' }}>
      <Flex justifyContent='center'>
        <Box maxWidth={800}>
          <Flex alignItems='center' width={[1, 3 / 4, 1 / 2]} height={500}>
            <Box px={[3, 3, 0]}>
              <Heading>The Pathway Social Franchise</Heading>
              <Text color='white' fontSize={2} fontWeight='bold'>
                The Pathway model offers a new way to help people who are
                homeless
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </BackgroundImage>
  </Flex>
)

export default Hero
