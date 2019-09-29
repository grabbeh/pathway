import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  Box,
  Flex,
  StandardSection as Section,
  Tab,
  Tabs,
  TabList,
  TabPanels
} from '../general/index'
import { BodyText, SectionTitle, Subtitle } from '../typography/index'
import Animation from '../animations/ScrollAnimation'

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
            steps {
              childMarkdownRemark {
                html
              }
            }
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
  const {
    pathwayTeamTitle,
    pathwayTeamSubtitle,
    franchiseOfferPhases
  } = data.allContentfulWhatYouCanDoPage.edges[0].node
  return (
    <Section bg='lightGrey'>
      <Animation>
        <SectionTitle>{pathwayTeamTitle}</SectionTitle>
      </Animation>
      <Box mb={3}>
        <Animation>
          <Subtitle color='green'>{pathwayTeamSubtitle}</Subtitle>
        </Animation>
      </Box>
      <Tabs>
        <Animation>
          <Flex flexWrap='wrap'>
            <Box width={[1, 1, 1 / 2]}>
              <TabList>
                {franchiseOfferPhases.map(({ phase, color }, i) => (
                  <Tab key={i} number={i} phase={phase} color={color} />
                ))}
              </TabList>
            </Box>
            <Box mt={[0, -15]} width={[1, 1, 1 / 2]}>
              <TabPanels>
                {franchiseOfferPhases.map(
                  ({ phase, steps, content, color }, i) => (
                    <Box key={i}>
                      <Subtitle color={color}>{phase}</Subtitle>
                      <BodyText html={content.childMarkdownRemark.html} />
                      {steps && (
                        <Subtitle
                          color={color}
                          html={steps.childMarkdownRemark.html}
                        />
                      )}
                    </Box>
                  )
                )}
              </TabPanels>
            </Box>
          </Flex>
        </Animation>
      </Tabs>
    </Section>
  )
}

export default MainSection
