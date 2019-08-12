import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '../general/Box'
import Text from '../general/Text'
import Flex from '../general/Flex'

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
