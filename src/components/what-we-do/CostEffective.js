import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '../standard/Box'
import Text from '../standard/Text'
import Flex from '../standard/Flex'

const query = graphql`
  query {
    allContentfulWwdPage {
      edges {
        node {
          pathwayTeamCostEffectivenessTitle
          childContentfulWwdPageWwdCostEffectiveSectionTextNode {
            childMarkdownRemark {
              html
            }
          }
          hospitalTeamBenefitsHolder {
            title
            childContentfulSectionMainContentTextNode {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }
`

const CostEffective = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulWWDPage.edges[0]
  let {
    pathwayTeamCostEffectivenessTitle,
    childContentfulWwdPageWwdCostEffectiveSectionTextNode,
    hospitalTeamBenefitsHolder
  } = node

  return <Box />
}

export default CostEffective
