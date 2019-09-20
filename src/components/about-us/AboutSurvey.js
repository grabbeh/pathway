import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '../general/Box'
import Animation from '../animations/ScrollAnimation'
import Section from '../general/WideSection'
import Flex from '../general/Flex'
import KeyStatsStamp from '../../svg/KeyStatsStamp'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import Tagline from '../typography/Tagline'
import Text from '../typography/Text'

const Bold = props => <Text.span color='grey'>{props.children}</Text.span>
const H1 = props => <Tagline color='white'>{props.children}</Tagline>
const Link = props => (
  <a style={{ color: '#4A4A4A' }} {...props}>
    {props.children}
  </a>
)

const components = {
  h1: H1,
  strong: Bold,
  a: Link
}

const query = graphql`
  query {
    allContentfulAboutPage {
      edges {
        node {
          studyText {
            childMdx {
              body
            }
          }
        }
      }
    }
  }
`
const AboutSurvey = () => {
  const data = useStaticQuery(query)
  const { studyText } = data.allContentfulAboutPage.edges[0].node
  return (
    <MDXProvider components={components}>
      <Section bg='blue'>
        <Flex flexWrap='wrap'>
          <Box width={[1, 0.15]}>
            <KeyStatsStamp />
          </Box>
          <Box width={[1, 0.85]}>
            <Animation>
              <MDXRenderer>{studyText.childMdx.body}</MDXRenderer>
            </Animation>
          </Box>
        </Flex>
      </Section>
    </MDXProvider>
  )
}

export default AboutSurvey
