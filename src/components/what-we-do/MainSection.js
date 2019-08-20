import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import Box from '../general/Box'
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
  const { node } = data.allContentfulWwdPage.edges[0]
  const {
    wwdIntro,
    wwdMainSectionTitle,
    wwdMainSectionSubtitle,
    wwdMainSection
  } = node
  return (
    <Section>
      <Animation>
        <Box mb={3}>
          <IntroTitle color='green'>{wwdIntro}</IntroTitle>
          <SectionTitle>{wwdMainSectionTitle}</SectionTitle>
        </Box>
      </Animation>
      <Box>
        <Animation>
          <Subtitle
            color='green'
            html={wwdMainSectionSubtitle.childMarkdownRemark.html}
          />
        </Animation>
      </Box>
      <Box>
        <Animation>
          <MDXRenderer>{wwdMainSection.childMdx.body}</MDXRenderer>
        </Animation>
      </Box>
    </Section>
  )
}

export default MainSection
