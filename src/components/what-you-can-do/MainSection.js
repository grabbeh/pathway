import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import Box from '../general/Box'
import SectionTitle from '../typography/SectionTitle'
import Subtitle from '../typography/Subtitle'
import BodyText from '../typography/BodyText'
import Animation from '../animations/ScrollAnimation'

const query = graphql`
  query {
    allContentfulWhatYouCanDoPage {
      edges {
        node {
          mainSectionSubtitle
          mainSectionTitle
          mainSectionContent {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const MainSection = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulWhatYouCanDoPage.edges[0]
  let { mainSectionTitle, mainSectionSubtitle, mainSectionContent } = node
  return (
    <Section>
      <Animation>
        <Box mb={3}>
          <SectionTitle>{mainSectionTitle}</SectionTitle>
        </Box>
      </Animation>
      <Box>
        <Animation>
          <Subtitle color='blue'>{mainSectionSubtitle}</Subtitle>
        </Animation>
      </Box>
      <Box>
        <Animation>
          <BodyText html={mainSectionContent.childMarkdownRemark.html} />
        </Animation>
      </Box>
    </Section>
  )
}

export default MainSection
