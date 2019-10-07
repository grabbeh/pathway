import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Flex, WideSection as Section } from '../general'
import { Subtitle, Tagline } from '../typography'
import { HideOnMobile } from '../shared'
import Animation from '../animations/ScrollAnimation'
import CaseStudyStamp from '../../svg/CaseStudyStamp'

const query = graphql`
  query {
    allContentfulWwdPage {
      edges {
        node {
          wwdCaseStudy {
            childMarkdownRemark {
              html
            }
          }
          wwdCaseStudySubtitle {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const CaseStudy = () => {
  const data = useStaticQuery(query)
  const { node } = data.allContentfulWwdPage.edges[0]
  const { wwdCaseStudy, wwdCaseStudySubtitle } = node
  return (
    <Section bg='blue'>
      <Animation>
        <Flex flexWrap='wrap'>
          <Box width={[1, 1, 1 / 3]}>
            <Box mb={[6, 4, 0]} position='relative'>
              <Box position='absolute'>
                <CaseStudyStamp />
              </Box>
            </Box>

            <Flex height='100%' alignItems='center'>
              <HideOnMobile>
                <Box mt={[0, 6, 0]}>
                  <Tagline
                    color='grey'
                    textAlign={['left', 'left', 'right']}
                    html={wwdCaseStudySubtitle.childMarkdownRemark.html}
                  />
                </Box>
              </HideOnMobile>
            </Flex>
          </Box>
          <Box width={[1, 1, 2 / 3]}>
            <Flex justifyContent='center'>
              <Box ml={[0, 0, 5]} width={[1]}>
                <Subtitle
                  color='white'
                  html={wwdCaseStudy.childMarkdownRemark.html}
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Animation>
    </Section>
  )
}

export default CaseStudy
