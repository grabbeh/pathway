import React from 'react'
import Box from '../general/Box'
import Text from '../typography/Text'
import Flex from '../general/Flex'
import Section from '../general/StandardSection'
import Animation from '../animations/ScrollAnimation'
import SectionTitle from '../typography/SectionTitle'
import Circle from '../../svg/Circle'

const StatSection = ({ stats, title, bg }) => (
  <Box position='relative' bg={bg}>
    <Box position='absolute' top={20} left={20}>
      <Circle />
    </Box>
    <Section>
      <Box mt={[5, 0]}>
        <Animation>
          <SectionTitle color='white'>{title}</SectionTitle>
        </Animation>
        <Box mt={4}>
          <Animation>
            <Flex justifyContent='space-around' flexWrap='wrap'>
              {stats.map(({ figure, text, subtitle }, i) => (
                <Box mb={[4, 0]} key={i} width={[1, 1 / 3]}>
                  <Stat subtitle={subtitle} figure={figure} text={text.text} />
                </Box>
              ))}
            </Flex>
          </Animation>
        </Box>
      </Box>
    </Section>
  </Box>
)

export default StatSection

const Stat = ({ figure, text, subtitle }) => (
  <Box>
    <Text lineHeight='75px' fontSize={8} color='white' fontWeight='heavy'>
      {figure}%
    </Text>
    <Text mr={2} fontWeight='subtitle' fontSize={5} color='yellow'>
      {subtitle}
    </Text>
    <Text fontWeight='subtitle' fontSize={3} color='white'>
      {text}
    </Text>
  </Box>
)
