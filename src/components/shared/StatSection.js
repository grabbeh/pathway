import React from 'react'
import Box from '../general/Box'
import Text from '../typography/Text'
import Flex from '../general/Flex'
import Section from '../general/StandardSection'
import SectionTitle from '../typography/SectionTitle'
import Circle from '../../svg/Circle'
import convertTitle from '../../utils/convertTitle'
import Animation from '../animations/ScrollAnimation'

const StatSection = ({ stats, title, id, bg }) => (
  <Box position='relative' bg={bg}>
    <Box position='absolute' top={[40, 40, 75]} left={30}>
      <Circle />
    </Box>
    <Section>
      <Box px={4} mt={[6, 100, 0]}>
        <Animation id={convertTitle(id)}>
          <SectionTitle color='white'>{title}</SectionTitle>
        </Animation>
        <Box mt={4}>
          <Flex flexWrap='wrap'>
            {stats.map(({ figure, text, subtitle }, i) => (
              <Box mb={[4, 4, 0]} key={i} width={[1, 1 / 3, 1 / 3]}>
                <Stat subtitle={subtitle} figure={figure} text={text.text} />
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </Section>
  </Box>
)

export default StatSection

const Stat = ({ figure, text, subtitle }) => (
  <Box>
    <Text
      lineHeight='heading'
      fontSize={[7, 9]}
      color='white'
      fontWeight='heavy'
    >
      {figure}%
    </Text>
    <Text mr={2} fontWeight='subtitle' fontSize={[4, 6]} color='white'>
      {subtitle}
    </Text>
    <Text fontWeight='subtitle' fontSize={[1, 3]} color='white'>
      {text}
    </Text>
  </Box>
)
