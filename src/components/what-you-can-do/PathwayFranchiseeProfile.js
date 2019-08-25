import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import SectionTitle from '../typography/SectionTitle'
import Subtitle from '../typography/Subtitle'
import BodyText from '../typography/BodyText'
import Animation from '../animations/ScrollAnimation'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const query = graphql`
  query {
    allContentfulWhatYouCanDoPage {
      edges {
        node {
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
  }
`

const MainSection = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulWhatYouCanDoPage.edges[0]
  let {
    franchiseeProfileTitle,
    franchiseeProfileIntro,
    franchiseeProfileSubtitle,
    franchiseeProfileContent
  } = node
  return (
    <Section>
      <Animation>
        <SectionTitle>{franchiseeProfileTitle}</SectionTitle>
      </Animation>
      <Animation>
        <BodyText html={franchiseeProfileIntro.childMarkdownRemark.html} />
      </Animation>
      <Animation>
        <Subtitle color='green'>{franchiseeProfileSubtitle}</Subtitle>
      </Animation>
      <Animation>
        <MDXRenderer>{franchiseeProfileContent.childMdx.body}</MDXRenderer>
      </Animation>
    </Section>
  )
}

export default MainSection
