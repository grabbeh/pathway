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
} from '../general'
import { BodyText, SectionTitle, Subtitle } from '../typography'
import Animation from '../animations/ScrollAnimation'

const query = graphql`
  query {
    howWeCanHelpPage: allContentfulWhatYouCanDoPage {
      nodes {
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
`

const MainSection = () => {
  const data = useStaticQuery(query)
  const {
    pathwayTeamTitle,
    pathwayTeamSubtitle,
    franchiseOfferPhases
  } = data.howWeCanHelpPage.nodes[0]
  return (
    <Section bg='lightGrey'>
      <Animation>
        <SectionTitle text={pathwayTeamTitle} />
      </Animation>
      <Box mb={3}>
        <Animation>
          <Subtitle text={pathwayTeamSubtitle} color='green' />
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
                      <Subtitle text={phase} color={color} />
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
