import React from 'react'
import Box from './Box'
import Text from './Text'
import Flex from './Flex'
import CenterSection from './CenterSection'
import Animation from './ScrollAnimation'

const Stats = () => (
  <Box bg='green'>
    <CenterSection>
      <Animation>
        <Text
          mt={0}
          color='white'
          fontWeight='bold'
          fontSize={3}
          textAlign='center'
        >
          A review of 100 homeless A&E frequent attenders during the first 6
          months of Manchester’s MPath service showed a:
        </Text>
      </Animation>
      <Box mt={3}>
        <Animation>
          <Flex justifyContent='space-around' flexWrap='wrap'>
            <Box width={[1, 1 / 3]}>
              <Text
                textAlign='center'
                fontSize={5}
                color='white'
                fontWeight='bold'
                mt={0}
              >
                47%
              </Text>
              <Text
                textAlign='center'
                fontSize={4}
                color='white'
                fontWeight='bold'
                mt={0}
              >
                reduction
              </Text>
              <Text textAlign='center' color='white' mt={0}>
                in A&E attendances
              </Text>
            </Box>
            <Box width={[1, 1 / 3]}>
              <Text
                textAlign='center'
                fontSize={5}
                color='white'
                fontWeight='bold'
                mt={0}
              >
                48%
              </Text>
              <Text
                textAlign='center'
                fontSize={4}
                color='white'
                fontWeight='bold'
                mt={0}
              >
                reduction
              </Text>
              <Text textAlign='center' color='white' mt={0}>
                in admissions
              </Text>
            </Box>
            <Box width={[1, 1 / 3]}>
              <Text
                textAlign='center'
                fontSize={5}
                color='white'
                fontWeight='bold'
                mt={0}
              >
                39%
              </Text>
              <Text
                textAlign='center'
                fontSize={4}
                color='white'
                fontWeight='bold'
                mt={0}
              >
                reduction
              </Text>
              <Text textAlign='center' color='white' mt={0}>
                in bed days
              </Text>
            </Box>
          </Flex>
        </Animation>
      </Box>
    </CenterSection>
  </Box>
)

export default Stats
