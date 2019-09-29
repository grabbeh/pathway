import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Flex, StandardSection as Section } from '../general/index'
import { BodyText, SectionTitle, Subtitle } from '../typography/index'
import Animation from '../animations/ScrollAnimation'
import ReactSVG from 'react-svg'

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
            mainContent {
              childMarkdownRemark {
                html
              }
            }
            icon {
              file {
                url
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
  const {
    pathwayTeamCostEffectivenessTitle,
    wwdCostEffectiveSection,
    hospitalTeamBenefitsHolder
  } = data.allContentfulWwdPage.edges[0].node
  return (
    <Section>
      <Animation>
        <SectionTitle text={pathwayTeamCostEffectivenessTitle} />
      </Animation>
      <Animation>
        <BodyText html={wwdCostEffectiveSection.childMarkdownRemark.html} />
      </Animation>
      <Animation>
        <Subtitle text='Pathway hospital teams:' color='green' />
      </Animation>
      <Flex flexWrap='wrap'>
        {hospitalTeamBenefitsHolder.map(({ icon, mainContent }, i) => (
          <Box mb={3} width={[1, 1 / 2]} key={i}>
            <Animation>
              <Box mr={4}>
                <Box height={50}>
                  <ReactSVG src={icon.file.url} />
                </Box>
                <Box>
                  <BodyText html={mainContent.childMarkdownRemark.html} />
                </Box>
              </Box>
            </Animation>
          </Box>
        ))}
      </Flex>
    </Section>
  )
}

export default CostEffective
