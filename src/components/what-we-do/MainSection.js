import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import IntroTitle from '../typography/IntroTitle'
import SectionTitle from '../typography/SectionTitle'
import Subtitle from '../typography/Subtitle'
import Animation from '../animations/ScrollAnimation'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import convertTitle from '../../utils/convertTitle'

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
  const { node } = data.allContentfulWwdPage.edges[0]
  const {
    wwdIntro,
    wwdMainSectionTitle,
    wwdMainSectionSubtitle,
    wwdMainSection
  } = node
  const url = convertTitle(wwdMainSectionTitle)
  return (
    <Section>
      <IntroTitle color='green'>{wwdIntro}</IntroTitle>
      <Animation id={url}>
        <SectionTitle>{wwdMainSectionTitle}</SectionTitle>
      </Animation>
      <Subtitle
        color='green'
        html={wwdMainSectionSubtitle.childMarkdownRemark.html}
      />
      <MDXRenderer>{wwdMainSection.childMdx.body}</MDXRenderer>
    </Section>
  )
}

export default MainSection
