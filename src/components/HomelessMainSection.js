import React from 'react'
import Section from './StandardSection'
import Box from './Box'
import Text from './Text'
import Animation from './ScrollAnimation'
import { useStaticQuery, graphql } from 'gatsby'
import HomelessStats from './HomelessStats'
import MarkdownText from './MarkdownText'

const query = graphql`
  query {
    allContentfulHomelessnessPage {
      edges {
        node {
          childContentfulHomelessnessPageHomelessnessDescriptionPartOneTextNode {
            childMarkdownRemark {
              html
            }
          }
          childContentfulHomelessnessPageHomelessnessDescriptionPartTwoTextNode {
            childMarkdownRemark {
              html
            }
          }
          childContentfulHomelessnessPageHomelessnessSubtitleTextNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const HomelessnessMainSection = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulHomelessnessPage.edges[0]
  let {
    childContentfulHomelessnessPageHomelessnessDescriptionPartOneTextNode,
    childContentfulHomelessnessPageHomelessnessDescriptionPartTwoTextNode,
    childContentfulHomelessnessPageHomelessnessSubtitleTextNode
  } = node

  return (
    <Section>
      <Animation>
        <Box mb={3}>
          <Text fontSize={3} color='blue'>
            Homelessness
          </Text>
          <Text fontWeight='bold' fontSize={5}>
            A major challenge to the NHS
          </Text>
        </Box>
      </Animation>
      <Box>
        <Animation>
          <MarkdownText
            fontSize={4}
            fontWeight='bold'
            color='blue'
            html={
              childContentfulHomelessnessPageHomelessnessSubtitleTextNode
                .childMarkdownRemark.html
            }
          />
        </Animation>
      </Box>
      <Box>
        <Animation>
          <MarkdownText
            fontSize={4}
            html={
              childContentfulHomelessnessPageHomelessnessDescriptionPartOneTextNode
                .childMarkdownRemark.html
            }
          />
        </Animation>
      </Box>
      <HomelessStats />
      <Box>
        <Animation>
          <MarkdownText
            fontSize={4}
            html={
              childContentfulHomelessnessPageHomelessnessDescriptionPartTwoTextNode
                .childMarkdownRemark.html
            }
          />
        </Animation>
      </Box>
    </Section>
  )
}

export default HomelessnessMainSection
