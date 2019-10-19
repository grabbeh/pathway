import React from 'react'
import { Box, Flex } from '../general'
import { BodyText, Text } from '../typography'
import Animation from '../animations/ScrollAnimation'
import ReactSVG from 'react-svg'

const Services = ({ services }) => (
  <Flex flexWrap='wrap'>
    {services.map(({ name, description, icon }, i) => (
      <Box mb={3} width={[1, 1 / 2, 1 / 3]} key={i}>
        <Animation>
          <Box mr={[0, 4]}>
            {icon && (
              <Box height={75}>
                <ReactSVG src={icon.file.url} />
              </Box>
            )}
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
