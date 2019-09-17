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
import WhatWeDoFact from '../../svg/WhatWeDoFact'

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
  const {
    pathwayModelTitle,
    wwdPathwayModelSubtitle,
    wwdPathwayModel,
    wwdPathwayModelPartTwo
  } = data.allContentfulWwdPage.edges[0].node

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
        <Box pl={[2, 4]} width={[1, 0.4]}>
          <Flex justifyContent='center' alignItems='center'>
            <WhatWeDoFact />
          </Flex>
        </Box>
        <Box width={[1, 0.6]}>
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
