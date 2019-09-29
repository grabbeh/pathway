import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StandardSection as Section } from '../general/index'
import { BodyText, SectionTitle } from '../typography/index'
import Animation from '../animations/ScrollAnimation'

const query = graphql`
  query {
    allContentfulWhatYouCanDoPage {
      edges {
        node {
          franchiseeFinancialInfoTitle
          franchiseeFinancialInfoContent {
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
    franchiseeFinancialInfoTitle,
    franchiseeFinancialInfoContent
  } = data.allContentfulWhatYouCanDoPage.edges[0].node
  return (
    <Section pb={3}>
      <Animation>
        <SectionTitle text={franchiseeFinancialInfoTitle} />
      </Animation>
      <Animation>
        <BodyText
          html={franchiseeFinancialInfoContent.childMarkdownRemark.html}
        />
      </Animation>
    </Section>
  )
}

export default MainSection
