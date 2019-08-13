import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '../general/Box'
import Text from '../general/Text'
import Flex from '../general/Flex'
import Section from '../general/StandardSection'
import SectionTitle from '../general/SectionTitle'
import Subtitle from '../general/Subtitle'
import BodyText from '../general/BodyText'
import Animation from '../animations/ScrollAnimation'

const query = graphql`
  query {
    allContentfulWwdPage {
      edges {
        node {
          pathwayTeamCostEffectivenessTitle
          wwdCostEffectiveSection {
            childMarkdownRemark {
              html
            }
          }
          hospitalTeamBenefitsHolder {
            title
            childContentfulSectionMainContentTextNode {
              mainContent
            }
          }
        }
      }
    }
  }
`

const CostEffective = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulWwdPage.edges[0]
  let {
    pathwayTeamCostEffectivenessTitle,
    wwdCostEffectiveSection,
    hospitalTeamBenefitsHolder
  } = node

  return (
    <Section>
      <Animation>
        <SectionTitle>{pathwayTeamCostEffectivenessTitle}</SectionTitle>
        <BodyText html={wwdCostEffectiveSection.childMarkdownRemark.html} />
        <Box mb={3}>
          <Subtitle color='green'>Pathway hospital teams:</Subtitle>
        </Box>
      </Animation>
      <Flex flexWrap='wrap'>
        {hospitalTeamBenefitsHolder.map(
          (
            {
              title,
              childContentfulSectionMainContentTextNode: { mainContent }
            },
            i
          ) => (
            <Box mb={3} width={[1, 1 / 2]} key={i}>
              <Animation>
                <Box mr={4}>
                  <Text.span fontWeight='bold'>{title}</Text.span>
                  <Text.span> {mainContent}</Text.span>
                </Box>
              </Animation>
            </Box>
          )
        )}
      </Flex>
    </Section>
  )
}

export default CostEffective
