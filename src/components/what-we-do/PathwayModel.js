import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '../general/Box'
import Section from '../general/StandardSection'
import SectionTitle from '../typography/SectionTitle'
import Subtitle from '../typography/Subtitle'
import BodyText from '../typography/BodyText'
import Animation from '../animations/ScrollAnimation'
import Flex from '../general/Flex'
import PathwayServicesList from '../what-we-do/PathwayServicesList'
import KeyFact from '../what-we-do/KeyFact'

const query = graphql`
  query {
    allContentfulWwdPage {
      edges {
        node {
          pathwayModelTitle
          wwdPathwayModel {
            childMarkdownRemark {
              html
            }
          }
          wwdPathwayModelPartTwo {
            childMarkdownRemark {
              html
            }
          }
          wwdPathwayModelSubtitle {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const PathwayModel = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulWwdPage.edges[0]
  let {
    pathwayModelTitle,
    wwdPathwayModelSubtitle,
    wwdPathwayModel,
    wwdPathwayModelPartTwo
  } = node

  return (
    <Animation>
      <Section pb={0}>
        <SectionTitle>{pathwayModelTitle}</SectionTitle>
        <Subtitle
          color='green'
          html={wwdPathwayModelSubtitle.childMarkdownRemark.html}
        />
        <BodyText html={wwdPathwayModel.childMarkdownRemark.html} />
      </Section>
      <Flex flexWrap='wrap'>
        <Box width={[1, 1 / 2]}>
          <KeyFact />
        </Box>
        <Box width={[1, 1 / 2]}>
          <PathwayServicesList />
        </Box>
      </Flex>
      <Section pt={0}>
        <BodyText html={wwdPathwayModelPartTwo.childMarkdownRemark.html} />
      </Section>
    </Animation>
  )
}

export default PathwayModel
