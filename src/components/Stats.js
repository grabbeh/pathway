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
          fontWeight='subtitle'
          fontSize={5}
          lineHeight='46px'
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
                fontSize={9}
                color='white'
                fontWeight='heavy'
                mt={0}
              >
                47%
              </Text>
              <Text.span
                textAlign='center'
                fontWeight='subtitle'
                fontSize={4}
                color='yellow'
              >
                reduction
              </Text.span>
              <Text.span
                textAlign='center'
                fontWeight='subtitle'
                fontSize={4}
                color='white'
              >
                in A&E attendances
              </Text.span>
            </Box>
            <Box width={[1, 1 / 3]}>
              <Text
                textAlign='center'
                fontSize={9}
                color='white'
                fontWeight='heavy'
              >
                48%
              </Text>
              <Text.span
                textAlign='center'
                fontWeight='subtitle'
                fontSize={4}
                color='yellow'
              >
                reduction
              </Text.span>
              <Text.span
                textAlign='center'
                fontWeight='subtitle'
                fontSize={4}
                color='white'
                mt={0}
              >
                in admissions
              </Text.span>
            </Box>
            <Box width={[1, 1 / 3]}>
              <Text
                textAlign='center'
                fontSize={9}
                color='white'
                fontWeight='heavy'
                mt={0}
              >
                39%
              </Text>
              <Text.span
                textAlign='center'
                fontWeight='subtitle'
                fontSize={4}
                color='yellow'
              >
                reduction
              </Text.span>
              <Text.span
                textAlign='center'
                fontWeight='subtitle'
                color='white'
                fontSize={4}
                mt={0}
              >
                in bed days
              </Text.span>
            </Box>
          </Flex>
        </Animation>
      </Box>
    </CenterSection>
  </Box>
)

export default Stats
