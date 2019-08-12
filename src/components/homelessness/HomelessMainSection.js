import React from 'react'
import Section from '../standard/StandardSection'
import Box from '../standard/Box'
import IntroTitle from '../standard/IntroTitle'
import SectionTitle from '../standard/SectionTitle'
import Subtitle from '../standard/Subtitle'
import BodyText from '../standard/BodyText'
import Animation from '../animations/ScrollAnimation'
import { useStaticQuery, graphql } from 'gatsby'
import HomelessStats from './HomelessStats'

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
          <IntroTitle color='blue'>Homelessness</IntroTitle>
          <SectionTitle>A major challenge to the NHS</SectionTitle>
        </Box>
      </Animation>
      <Box>
        <Animation>
          <Subtitle
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
          <BodyText
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
          <BodyText
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
