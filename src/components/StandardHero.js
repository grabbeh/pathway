import React, { useState, useEffect } from 'react'
import Box from './Box'
import Flex from './Flex'
import Text from './Text'
import Heading from './Heading'

import InitialLoadAnimation from './InitialLoadAnimation'

const AboutHero = ({ title, html }) => {
  let [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
  }, [])

  return (
    <Flex flexWrap='wrap'>
      <Flex bg='blue' flex='0 0 20px' />
      <Box bg='midGrey' style={{ flex: '1' }}>
        {html ? (
          <Flex justifyContent='center'>
            <Box maxWidth={800}>
              <Flex alignItems='center' width={[1, 3 / 4, 1 / 2]} height={500}>
                <Box px={[3, 3, 0]}>
                  <InitialLoadAnimation load={load}>
                    <Heading color='grey'>{title}</Heading>
                    <Text
                      lineHeight='subtitle'
                      fontSize={4}
                      fontWeight='subtitle'
                      dangerouslySetInnerHTML={{
                        __html: html
                      }}
                    />
                  </InitialLoadAnimation>
                </Box>
              </Flex>
            </Box>
          </Flex>
        ) : (
          <Box>
            <Flex justifyContent='center' height={500} alignItems='center'>
              <InitialLoadAnimation load={load}>
                <Box px={[3, 3, 0]} width={[1, 800]}>
                  <Heading color='grey'>{title}</Heading>
                </Box>
              </InitialLoadAnimation>
            </Flex>
          </Box>
        )}
      </Box>
    </Flex>
  )
}

export default AboutHero
