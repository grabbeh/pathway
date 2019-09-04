import React from 'react'
import Box from '../general/Box'
import Text from '../typography/Text'
import Flex from '../general/Flex'
import Section from '../general/StandardSection'
import SectionTitle from '../typography/SectionTitle'
import Circle from '../../svg/Circle'
import Animation from '../animations/ScrollAnimation'
import MarkdownText from '../general/MarkdownText'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

const H1 = props => <SectionTitle color='white'>{props.children}</SectionTitle>

const components = {
  h1: H1
}

const StatSection = ({ stats, html, mdx, title, bg }) => (
  <MDXProvider components={components}>
    <Box position='relative' bg={bg}>
      <Box position='absolute' top={[40, 40, 75]} left={30}>
        <Circle />
      </Box>
      <Section>
        <Box px={4} mt={[6, 100, 0]}>
          <Animation>
            {html && (
              <MarkdownText
                fontSize={[4, 6]}
                lineHeight={['medium', 'tagline']}
                fontWeight='bold'
                color='white'
                html={html}
              />
            )}
            {title && <SectionTitle color='white'>{title}</SectionTitle>}
            {mdx && <MDXRenderer>{mdx}</MDXRenderer>}
          </Animation>
          <Box mt={4}>
            <Flex flexWrap='wrap'>
              {stats.map(({ figure, text, subtitle }, i) => (
                <Box mb={[4, 4, 0]} key={i} width={[1, 1 / 3, 1 / 3]}>
                  <Animation duration={i * 500}>
                    <Stat
                      subtitle={subtitle}
                      figure={figure}
                      text={text.text}
                    />
                  </Animation>
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>
      </Section>
    </Box>
  </MDXProvider>
)

export default StatSection

const Stat = ({ figure, text, html, subtitle }) => (
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
