import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import Box from '../general/Box'
import IntroTitle from '../typography/IntroTitle'
import SectionTitle from '../typography/SectionTitle'
import Subtitle from '../typography/Subtitle'
import Animation from '../animations/ScrollAnimation'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import changeCase from 'change-case'

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
  const url = changeCase.hyphenCase(wwdMainSectionTitle)
  return (
    <Section>
      <Animation id={url}>
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
