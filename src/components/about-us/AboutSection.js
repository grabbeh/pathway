import React from 'react'
import Box from '../general/Box'
import { graphql, useStaticQuery } from 'gatsby'
import Section from '../general/StandardSection'
import Animation from '../animations/ScrollAnimation'
import BodyText from '../typography/BodyText'
import Subtitle from '../typography/Subtitle'
import IntroTitle from '../typography/IntroTitle'
import SectionTitle from '../typography/SectionTitle'

const query = graphql`
  query {
    allContentfulAboutPage {
      edges {
        node {
          aboutIntroTitle
          aboutTitle
          aboutSubtitle {
            childMarkdownRemark {
              html
            }
          }
          aboutDescription {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const AboutSection = () => {
  const data = useStaticQuery(query)
  const {
    aboutTitle,
    aboutIntroTitle,
    aboutDescription,
    aboutSubtitle
  } = data.allContentfulAboutPage.edges[0].node
  return (
    <Section>
      <Animation>
        <IntroTitle color='green'>{aboutIntroTitle}</IntroTitle>
        <SectionTitle>{aboutTitle}</SectionTitle>
      </Animation>
      <Box>
        <Animation>
          <Subtitle
            color='green'
            html={aboutSubtitle.childMarkdownRemark.html}
          />
        </Animation>
      </Box>
      <Box>
        <Animation>
          <BodyText html={aboutDescription.childMarkdownRemark.html} />
        </Animation>
      </Box>
    </Section>
  )
}

export default AboutSection
