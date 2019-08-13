import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import Box from '../general/Box'
import IntroTitle from '../general/IntroTitle'
import SectionTitle from '../general/SectionTitle'
import Subtitle from '../general/Subtitle'
import BodyText from '../general/BodyText'
import Animation from '../animations/ScrollAnimation'

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
  let { node } = data.allContentfulWwdPage.edges[0]
  let {
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
          <BodyText html={wwdMainSection.childMarkdownRemark.html} />
        </Animation>
      </Box>
    </Section>
  )
}

export default MainSection
