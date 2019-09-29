import React from 'react'
import { Box, StandardSection as Section } from '../general/index'
import {
  BodyText,
  IntroTitle,
  SectionTitle,
  Subtitle
} from '../typography/index'
import Animation from '../animations/ScrollAnimation'
import { useStaticQuery, graphql } from 'gatsby'
import HomelessStats from './Stats'

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
        <IntroTitle text='Homelessness' color='blue' />
        <SectionTitle text='A major challenge to the NHS' />
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
