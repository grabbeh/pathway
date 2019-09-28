import React from 'react'
import Box from '../general/Box'
import { useStaticQuery, graphql } from 'gatsby'
import IntroTitle from '../typography/IntroTitle'
import Flex from '../general/Flex'
import Subtitle from '../typography/Subtitle'
import Animation from '../animations/ScrollAnimation'
import BackgroundImage from '../general/BackgroundImage'
import CaseStudyStamp from '../../svg/CaseStudyStamp'

const query = graphql`
  query {
    allContentfulHomelessnessPage {
      edges {
        node {
          programmeImage {
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid
            }
          }
          programmeText {
            childMarkdownRemark {
              html
            }
          }
          programmeTitle
        }
      }
    }
  }
`

const HomelessProgramme = () => {
  const data = useStaticQuery(query)
  const {
    programmeText,
    programmeTitle,
    programmeImage
  } = data.allContentfulHomelessnessPage.edges[0].node
  return (
    <Box>
      <Flex flexWrap='wrap'>
        <Box position='relative' width={[1, 0.5, 1 / 3]}>
          <BackgroundImage
            style={{ height: '100vh' }}
            imageData={programmeImage.fluid}
          >
            <Box position='absolute' top={20} left={20}>
              <CaseStudyStamp />
            </Box>
          </BackgroundImage>
        </Box>
        <Box py={[4, 5]} bg='green' width={[1, 0.5, 2 / 3]}>
          <Animation>
            <Flex justifyContent='center'>
              <Box p={[3, 3, 0]} width={[1, 1, 0.7]}>
                <Box mb={3}>
                  <IntroTitle color='white'>{programmeTitle}</IntroTitle>
                </Box>
                <Box>
                  <Box>
                    <Subtitle
                      color='white'
                      html={programmeText.childMarkdownRemark.html}
                    />
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Animation>
        </Box>
      </Flex>
    </Box>
  )
}

export default HomelessProgramme
