import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StandardSection as Section } from '../general'
import { SectionTitle, Subtitle, BodyText } from '../typography'
import Animation from '../animations/ScrollAnimation'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const query = graphql`
  query {
    howWeCanHelpPage: allContentfulWhatYouCanDoPage {
      nodes {
        franchiseeProfileTitle
        franchiseeProfileIntro {
          childMarkdownRemark {
            html
          }
        }
        franchiseeProfileSubtitle
        franchiseeProfileContent {
          childMdx {
            body
          }
        }
      }
    }
  }
`

const MainSection = () => {
  const data = useStaticQuery(query)
  const {
    franchiseeProfileTitle,
    franchiseeProfileIntro,
    franchiseeProfileSubtitle,
    franchiseeProfileContent
  } = data.howWeCanHelpPage.nodes[0]
  return (
    <Section pt={[4, 3]}>
      <Animation>
        <SectionTitle text={franchiseeProfileTitle} />
      </Animation>
      <Animation>
        <BodyText html={franchiseeProfileIntro.childMarkdownRemark.html} />
      </Animation>
      <Animation>
        <Subtitle text={franchiseeProfileSubtitle} color='green' />
      </Animation>
      <Animation>
        <MDXRenderer>{franchiseeProfileContent.childMdx.body}</MDXRenderer>
      </Animation>
    </Section>
  )
}

export default MainSection
