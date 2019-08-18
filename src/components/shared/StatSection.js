import React from 'react'
import Box from '../general/Box'
import Text from '../typography/Text'
import Flex from '../general/Flex'
import Section from '../general/StandardSection'
import Animation from '../animations/ScrollAnimation'
import SectionTitle from '../typography/SectionTitle'

const StatSection = ({ stats, title, bg }) => (
  <Box bg={bg}>
    <Section>
      <Animation>
        <SectionTitle color='white'>{title}</SectionTitle>
      </Animation>
      <Box mt={4}>
        <Animation>
          <Flex justifyContent='space-around' flexWrap='wrap'>
            {stats.map(({ figure, text, subtitle }, i) => (
              <Box key={i} width={[1, 1 / 3]}>
                <Stat subtitle={subtitle} figure={figure} text={text.text} />
              </Box>
            ))}
          </Flex>
        </Animation>
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
