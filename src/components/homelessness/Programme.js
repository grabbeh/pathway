import React from 'react'
import { Box, Flex, BackgroundImage } from '../general/index'
import { IntroTitle, Subtitle } from '../typography/index'
import { useStaticQuery, graphql } from 'gatsby'
import Animation from '../animations/ScrollAnimation'
import CaseStudyStamp from '../../svg/CaseStudyStamp'
import useDetectWidth from '../../hooks/useDetectWidth'

const query = graphql`
  query {
    allContentfulHomelessnessPage {
      edges {
        node {
          programmeImage {
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid
            }
          }
          mobileProgrammeImage {
            fluid(maxWidth: 400) {
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
  const { isMobile } = useDetectWidth()
  const data = useStaticQuery(query)
  const {
    programmeText,
    programmeTitle,
    programmeImage,
    mobileProgrammeImage
  } = data.allContentfulHomelessnessPage.edges[0].node

  return (
    <Flex flexWrap='wrap'>
      <Box position='relative' width={[1, 1, 1 / 3]}>
        <BackgroundImage
          style={{ height: '100vh' }}
          imageData={
            isMobile ? mobileProgrammeImage.fluid : programmeImage.fluid
          }
        >
          <Box position='absolute' top={20} left={20}>
            <CaseStudyStamp />
          </Box>
        </BackgroundImage>
      </Box>
      <Box py={[4, 5]} bg='green' width={[1, 1, 2 / 3]}>
        <Animation>
          <Flex justifyContent='center'>
            <Box p={[3, 3, 0]} width={[1, 1, 0.7]}>
              <Box mb={3}>
                <IntroTitle text={programmeTitle} color='white' />
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
  )
}

export default HomelessProgramme
