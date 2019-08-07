import React from 'react'
import Text from './Text'
import CenterSection from './CenterSection'
import Animation from './ScrollAnimation'
import Box from './Box'
import Flex from './Flex'

const SocialFranchise = () => (
  <Box bg='lightGrey'>
    <CenterSection>
      <Flex alignItems='center' flexWrap='wrap'>
        <Box width={[1, 1 / 2]}>
          <Text fontWeight='subtitle' fontSize={3} color='green'>
            What is a social franchise?
          </Text>
        </Box>
        <Box width={[1, 1 / 2]}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Box>
      </Flex>
    </CenterSection>
  </Box>
)

export default SocialFranchise
