import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import Box from '../general/Box'
import SectionTitle from '../typography/SectionTitle'
import Subtitle from '../typography/Subtitle'
import BodyText from '../typography/BodyText'
import Animation from '../animations/ScrollAnimation'
import Flex from '../general/Flex'
import Tabs from '../general/Tabs'
import Tab from '../general/Tab'
import TabList from '../general/TabList'
import TabPanels from '../general/TabPanels'

const query = graphql`
  query {
    allContentfulWhatYouCanDoPage {
      edges {
        node {
          pathwayTeamTitle
          pathwayTeamSubtitle
          franchiseOfferPhases {
            phase
            color
            content {
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
  let { pathwayTeamTitle, pathwayTeamSubtitle, franchiseOfferPhases } = node
  return (
    <Section>
      <Animation>
        <Box mb={3}>
          <SectionTitle>{pathwayTeamTitle}</SectionTitle>
        </Box>
      </Animation>
      <Box mb={3}>
        <Animation>
          <Subtitle color='green'>{pathwayTeamSubtitle}</Subtitle>
        </Animation>
      </Box>
      <Tabs>
        <Flex flexWrap='wrap'>
          <Box width={[1, 1 / 2]}>
            <TabList>
              {franchiseOfferPhases.map(({ phase, color }, i) => (
                <Tab key={i} number={i} phase={phase} color={color} />
              ))}
            </TabList>
          </Box>
          <Box width={[1, 1 / 2]}>
            <TabPanels>
              {franchiseOfferPhases.map(({ phase, content, color }, i) => (
                <Box key={i}>
                  <Subtitle color={color}>{phase}</Subtitle>
                  <BodyText html={content.childMarkdownRemark.html} />
                </Box>
              ))}
            </TabPanels>
          </Box>
        </Flex>
      </Tabs>
    </Section>
  )
}

export default MainSection
