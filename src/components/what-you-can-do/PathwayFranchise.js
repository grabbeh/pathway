import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import Box from '../general/Box'
import SectionTitle from '../typography/SectionTitle'
import Subtitle from '../typography/Subtitle'
import BodyText from '../typography/BodyText'
import Animation from '../animations/ScrollAnimation'
import Flex from '../general/Flex'

const query = graphql`
  query {
    allContentfulWhatYouCanDoPage {
      edges {
        node {
          franchiseSectionTitle
          franchiseSectionContent {
            childMarkdownRemark {
              html
            }
          }
          franchiseBenefitsTitle
          pathwayFranchiseBenefits {
            name
            description {
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

const MainSection = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulWhatYouCanDoPage.edges[0]
  let {
    franchiseSectionTitle,
    franchiseSectionContent,
    franchiseBenefitsTitle,
    pathwayFranchiseBenefits
  } = node
  return (
    <Section>
      <Animation>
        <Box mb={3}>
          <SectionTitle>{franchiseSectionTitle}</SectionTitle>
        </Box>
      </Animation>

      <Box>
        <Animation>
          <BodyText html={franchiseSectionContent.childMarkdownRemark.html} />
        </Animation>
      </Box>
      <Box mb={3}>
        <Animation>
          <Subtitle color='green'>{franchiseBenefitsTitle}</Subtitle>
        </Animation>
      </Box>
      <Flex flexWrap='wrap'>
        {pathwayFranchiseBenefits.map(({ name, description }, i) => {
          return (
            <Box mb={3} width={[1, 1 / 2, 1 / 3]} key={i}>
              <Animation>
                <Box mr={4}>
                  <Box fontWeight='bold' fontSize={2}>
                    {name}
                  </Box>
                  <Box>
                    <BodyText html={description.childMarkdownRemark.html} />
                  </Box>
                </Box>
              </Animation>
            </Box>
          )
        })}
      </Flex>
    </Section>
  )
}

export default MainSection
