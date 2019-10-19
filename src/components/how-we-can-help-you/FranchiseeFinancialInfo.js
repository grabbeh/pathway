import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StandardSection as Section } from '../general'
import { BodyText, SectionTitle } from '../typography'
import Animation from '../animations/ScrollAnimation'

const query = graphql`
  query {
    howWeCanHelpPage: allContentfulWhatYouCanDoPage {
      nodes {
        franchiseeFinancialInfoTitle
        franchiseeFinancialInfoContent {
          childMarkdownRemark {
            html
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
  } = data.howWeCanHelpPage.nodes[0]
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
