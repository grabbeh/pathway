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
          homelessnessDescriptionPartOne {
            childMarkdownRemark {
              html
            }
          }
          homelessnessDescriptionPartTwo {
            childMarkdownRemark {
              html
            }
          }
          homelessnessSubtitle {
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
    homelessnessDescriptionPartOne,
    homelessnessDescriptionPartTwo,
    homelessnessSubtitle
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
            html={homelessnessSubtitle.childMarkdownRemark.html}
          />
        </Animation>
      </Box>
      <Box>
        <Animation>
          <BodyText
            html={homelessnessDescriptionPartOne.childMarkdownRemark.html}
          />
        </Animation>
      </Box>
      <HomelessStats />
      <Box>
        <Animation>
          <BodyText
            html={homelessnessDescriptionPartTwo.childMarkdownRemark.html}
          />
        </Animation>
      </Box>
    </Section>
  )
}

export default HomelessnessMainSection
