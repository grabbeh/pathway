import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import IntroTitle from '../typography/IntroTitle'
import SectionTitle from '../typography/SectionTitle'
import Subtitle from '../typography/Subtitle'
import Animation from '../animations/ScrollAnimation'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const query = graphql`
  query {
    allContentfulWwdPage {
      edges {
        node {
          wwdIntro
          wwdMainSectionTitle
          wwdMainSectionSubtitle {
            childMarkdownRemark {
              html
            }
          }
          wwdMainSection {
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
  const {
    wwdIntro,
    wwdMainSectionTitle,
    wwdMainSectionSubtitle,
    wwdMainSection
  } = data.allContentfulWwdPage.edges[0].node

  return (
    <Section>
      <Animation>
        <IntroTitle color='green'>{wwdIntro}</IntroTitle>
        <SectionTitle>{wwdMainSectionTitle}</SectionTitle>
        <Subtitle
          color='green'
          html={wwdMainSectionSubtitle.childMarkdownRemark.html}
        />
        <MDXRenderer>{wwdMainSection.childMdx.body}</MDXRenderer>
      </Animation>
    </Section>
  )
}

export default MainSection
