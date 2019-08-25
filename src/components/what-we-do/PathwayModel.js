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
    <Box>
      <Section>
        <Animation>
          <SectionTitle>{pathwayModelTitle}</SectionTitle>
        </Animation>
        <Box>
          <Animation>
            <Subtitle
              color='green'
              html={wwdPathwayModelSubtitle.childMarkdownRemark.html}
            />
          </Animation>
        </Box>
        <Box>
          <Animation>
            <BodyText html={wwdPathwayModel.childMarkdownRemark.html} />
          </Animation>
        </Box>
      </Section>
      <Animation>
        <Flex flexWrap='wrap'>
          <Box width={[1, 1 / 2]}>
            <KeyFact />
          </Box>
          <Box width={[1, 1 / 2]}>
            <PathwayServicesList />
          </Box>
        </Flex>
      </Animation>
      <Section>
        <Box>
          <Animation>
            <BodyText html={wwdPathwayModelPartTwo.childMarkdownRemark.html} />
          </Animation>
        </Box>
      </Section>
    </Box>
  )
}

export default PathwayModel
