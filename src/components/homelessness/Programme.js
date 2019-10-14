import React from 'react'
import { Box, Flex, BackgroundImage } from '../general'
import { IntroTitle, Subtitle } from '../typography'
import { useStaticQuery, graphql } from 'gatsby'
import Animation from '../animations/ScrollAnimation'
import CaseStudyStamp from '../../svg/CaseStudyStamp'
import { useDetectWidth } from '../../hooks'

const query = graphql`
  query {
    allContentfulHomelessnessPage {
      edges {
        node {
          programmeImage {
            description
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
  const { isDesktop } = useDetectWidth()
  const data = useStaticQuery(query)
  const {
    programmeText,
    programmeTitle,
    programmeImage
  } = data.allContentfulHomelessnessPage.edges[0].node

  return (
    <Flex flexWrap='wrap'>
      <Flex width={[1, 1, 1 / 3]} flexBasis='auto'>
        <Box position='relative' width={1}>
          {isDesktop ? (
            <BackgroundImage
              alt={programmeImage.description}
              style={{ height: '100%' }}
              imageData={programmeImage.fluid}
            >
              <Box position='absolute' top={20} left={20}>
                <CaseStudyStamp />
              </Box>
            </BackgroundImage>
          ) : (
            <BackgroundImage
              alt={programmeImage.description}
              style={{ height: '300px' }}
              imageData={programmeImage.fluid}
            >
              <Box position='absolute' top={20} left={20}>
                <CaseStudyStamp />
              </Box>
            </BackgroundImage>
          )}
        </Box>
      </Flex>
      <Flex flex='1'>
        <Box bg='green'>
          <Animation>
            <Flex height='100%' alignItems='center'>
              <Box py={[3, 5]} px={[3, 3, 5]}>
                <Box mb={3}>
                  <IntroTitle text={programmeTitle} color='white' />
                </Box>
                <Subtitle
                  color='white'
                  html={programmeText.childMarkdownRemark.html}
                />
              </Box>
            </Flex>
          </Animation>
        </Box>
      </Flex>
    </Flex>
  )
}

export default HomelessProgramme
