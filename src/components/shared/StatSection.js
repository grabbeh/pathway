import React from 'react'
import {
  Box,
  Flex,
  MarkdownText,
  WideSection as Section
} from '../general/index'
import { Text, SectionTitle } from '../typography/index'
import Animation from '../animations/ScrollAnimation'
import KeyStatsStamp from '../../svg/KeyStatsStamp'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

/*
const H1 = props => <SectionTitle color='white' {...props}>{props.children}</SectionTitle>
const Link = props => (
  <a {...props} style={{ color: 'white' }}>
    {props.children}
  </a>
)
const components = {
  h1: H1,
  a: Link
}*/

const StatSection = ({ stats, html, mdx, title, bg }) => (
 // <MDXProvider components={components}>
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
              {title && <SectionTitle text={title} color='white' />}
              {mdx && <MDXRenderer>{mdx}</MDXRenderer>}
            </Animation>
            <Box>
              <Flex flexWrap='wrap'>
                {stats.map(({ figure, text, subtitle }, i) => (
                  <Box mb={[3, 3, 0]} key={i} width={[1, 1 / 3, 1 / 3]}>
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
//  </MDXProvider>
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
    <Text fontWeight='subtitle' fontSize={[4, 6]} color='white'>
      {subtitle}
    </Text>
    <Text fontWeight='subtitle' fontSize={[1, 3]} color='white'>
      {text}
    </Text>
  </Box>
)
