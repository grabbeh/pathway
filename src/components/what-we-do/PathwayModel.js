import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Flex, StandardSection as Section, WideSection } from '../general'
import { BodyText, SectionTitle, Subtitle } from '../typography'
import Animation from '../animations/ScrollAnimation'
import PathwayServicesList from '../what-we-do/PathwayServicesList'
import WhatWeDoFact from '../../svg/WhatWeDoFact'

const query = graphql`
  query {
    whatWeDoPage: allContentfulWwdPage {
      nodes {
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
`

const PathwayModel = () => {
  const data = useStaticQuery(query)
  const {
    pathwayModelTitle,
    wwdPathwayModelSubtitle,
    wwdPathwayModel,
    wwdPathwayModelPartTwo
  } = data.whatWeDoPage.nodes[0]

  return (
    <Animation>
      <Section pb={0}>
        <SectionTitle text={pathwayModelTitle} />
        <Subtitle
          color='green'
          html={wwdPathwayModelSubtitle.childMarkdownRemark.html}
        />
        <BodyText html={wwdPathwayModel.childMarkdownRemark.html} />
      </Section>
      <WideSection pb={0} pt={[0, 3]}>
        <Flex flexWrap='wrap'>
          <Box px={[3, 6, 3]} width={[1, 1, 0.4]}>
            <Flex justifyContent='center'>
              <Box width={1}>
                <WhatWeDoFact />
              </Box>
            </Flex>
          </Box>
          <Box width={[1, 1, 0.6]}>
            <Box>
              <PathwayServicesList />
            </Box>
          </Box>
        </Flex>
      </WideSection>
      <Section pt={3}>
        <BodyText html={wwdPathwayModelPartTwo.childMarkdownRemark.html} />
      </Section>
    </Animation>
  )
}

export default PathwayModel
