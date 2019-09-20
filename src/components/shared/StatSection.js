import React from 'react'
import Box from '../general/Box'
import Text from '../typography/Text'
import Flex from '../general/Flex'
import Section from '../general/WideSection'
import SectionTitle from '../typography/SectionTitle'
import Animation from '../animations/ScrollAnimation'
import MarkdownText from '../general/MarkdownText'
import KeyStatsStamp from '../../svg/KeyStatsStamp'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

const H1 = props => <SectionTitle color='white'>{props.children}</SectionTitle>
const Link = props => (
  <a {...props} style={{ color: 'white' }}>
    {props.children}
  </a>
)
const components = {
  h1: H1,
  a: Link
}

const StatSection = ({ stats, html, mdx, title, bg }) => (
  <MDXProvider components={components}>
    <Box bg={bg}>
      <Section>
        <Flex flexWrap='wrap'>
          <Box width={[1, 1, 0.15]}>
            <KeyStatsStamp />
          </Box>
          <Box width={[1, 1, 0.85]} mt={[3, 0, 0]}>
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
            <Box mt={[0, 4]}>
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
        </Flex>
      </Section>
    </Box>
  </MDXProvider>
)

export default StatSection

const Stat = ({ figure, text, subtitle }) => (
  <Box>
    <Text
      lineHeight={['tagline', 'heading']}
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
