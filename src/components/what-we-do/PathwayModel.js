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
import convertTitle from '../../utils/convertTitle'

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
  const url = convertTitle(pathwayModelTitle)

  return (
    <Animation threshold={0.3} id={url}>
      <Section>
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
      <Section>
        <BodyText html={wwdPathwayModelPartTwo.childMarkdownRemark.html} />
      </Section>
    </Animation>
  )
}

export default PathwayModel
