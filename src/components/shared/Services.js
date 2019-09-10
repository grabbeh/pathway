import React from 'react'
import Box from '../general/Box'
import BodyText from '../typography/BodyText'
import Flex from '../general/Flex'
import Animation from '../animations/ScrollAnimation'
import Text from '../typography/Text'
import ReactSVG from 'react-svg'

const Services = ({ services }) => (
  <Flex flexWrap='wrap'>
    {services.map(({ name, description, icon }, i) => (
      <Box mb={3} width={[1, 1 / 2, 1 / 3]} key={i}>
        <Animation>
          <Box mr={4}>
            <ReactSVG src={icon.file.url} />
            <Text fontWeight='bold' fontSize={3}>
              {name}:
            </Text>
            <Box>
              <BodyText html={description.childMarkdownRemark.html} />
            </Box>
          </Box>
        </Animation>
      </Box>
    ))}
  </Flex>
)

export default Services
