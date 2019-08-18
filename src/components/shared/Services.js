import React from 'react'
import Box from '../general/Box'
import BodySubText from '../typography/BodySubText'
import Flex from '../general/Flex'
import Animation from '../animations/ScrollAnimation'

const Services = ({ services }) => (
  <Flex flexWrap='wrap'>
    {services.map(({ name, description }, i) => {
      return (
        <Box mb={3} width={[1, 1 / 2, 1 / 3]} key={i}>
          <Animation>
            <Box mr={4}>
              <Box fontWeight='bold' fontSize={1}>
                {name}:
              </Box>
              <Box>
                <BodySubText html={description.childMarkdownRemark.html} />
              </Box>
            </Box>
          </Animation>
        </Box>
      )
    })}
  </Flex>
)

export default Services
