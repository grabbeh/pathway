import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from './Box'

const WhatWeDo = () => {
  const query = graphql`
    query {
      allContentfulWwdPage {
        edges {
          node {
            childContentfulWwdPageWwdMainSectionKeyFactTextNode {
              childMarkdownRemark {
                html
              }
            }
            childContentfulWwdPageWwdMainSectionSubtitleTextNode {
              childMarkdownRemark {
                html
              }
            }
            childContentfulWwdPageWwdMainSectionTextNode {
              childMarkdownRemark {
                html
              }
            }
            childContentfulWwdPageWwdCaseStudySubtitleTextNode {
              childMarkdownRemark {
                html
              }
            }
            childContentfulWwdPageWwdCaseStudyTextNode {
              childMarkdownRemark {
                html
              }
            }
            pathwayModelTitle
            childContentfulWwdPageWwdPathwayModelSubtitleTextNode {
              childMarkdownRemark {
                html
              }
            }
            childContentfulWwdPageWwdPathwayModelTextNode {
              childMarkdownRemark {
                html
              }
            }
            childContentfulWwdPageWwdPathwayModelPartTwoTextNode {
              childMarkdownRemark {
                html
              }
            }
            benefitsTitle
            hospitalTeamBenefitsHolder {
              headline
              subtitle {
                childMarkdownRemark {
                  html
                }
              }
            }
            pathwayTeamCostEffectivenessTitle
            childContentfulWwdPageWwdCostEffectiveSectionTextNode {
              childMarkdownRemark {
                html
              }
            }
            pathwayTeamTitle
            hospitalTeamTableRowHolder {
              hospitalItem {
                hospitalItem
              }
            }
            hospitalTeamCostsTitle
            hospitalTeamCostsTableHolder {
              staffType
              staffTypeCost
              staffTypeSubtitle {
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
  const data = useStaticQuery(query)
  console.log(data)
  return <Box>Hello</Box>
}

export default WhatWeDo
