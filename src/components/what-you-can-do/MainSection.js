import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StandardSection as Section } from '../general/index'
import { BodyText, SectionTitle, Subtitle } from '../typography/index'
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
  const {
    mainSectionTitle,
    mainSectionSubtitle,
    mainSectionContent
  } = data.allContentfulWhatYouCanDoPage.edges[0].node
  return (
    <Section>
      <Animation>
        <SectionTitle>{mainSectionTitle}</SectionTitle>
      </Animation>
      <Animation>
        <Subtitle color='blue'>{mainSectionSubtitle}</Subtitle>
      </Animation>
      <Animation>
        <BodyText html={mainSectionContent.childMarkdownRemark.html} />
      </Animation>
    </Section>
  )
}

export default MainSection
