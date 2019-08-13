import React from 'react'
import Section from '../general/StandardSection'
import Box from '../general/Box'
import IntroTitle from '../general/IntroTitle'
import SectionTitle from '../general/SectionTitle'
import Subtitle from '../general/Subtitle'
import BodyText from '../general/BodyText'
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
