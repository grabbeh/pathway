import React from 'react'
import Section from '../general/StandardSection'
import Box from '../general/Box'
import IntroTitle from '../typography/IntroTitle'
import SectionTitle from '../typography/SectionTitle'
import Subtitle from '../typography/Subtitle'
import BodyText from '../typography/BodyText'
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
  const {
    homelessnessDescriptionPartOne,
    homelessnessDescriptionPartTwo,
    homelessnessSubtitle
  } = data.allContentfulHomelessnessPage.edges[0].node
  return (
    <Section>
      <Animation>
        <IntroTitle color='blue'>Homelessness</IntroTitle>
        <SectionTitle>A major challenge to the NHS</SectionTitle>
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
