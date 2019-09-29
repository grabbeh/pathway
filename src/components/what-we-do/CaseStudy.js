import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Flex, WideSection as Section } from '../general/index'
import { Subtitle, Tagline } from '../typography/index'
import { HideOnMobile } from '../shared/index'
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
            <CaseStudyStamp />
            <Flex height='100%' alignItems='center'>
              <HideOnMobile>
                <Box mt={-7}>
                  <Tagline
                    color='grey'
                    textAlign='right'
                    html={wwdCaseStudySubtitle.childMarkdownRemark.html}
                  />
                </Box>
              </HideOnMobile>
            </Flex>
          </Box>
          <Box width={[1, 1, 2 / 3]}>
            <Flex justifyContent='center'>
              <Box width={[1, 1, 0.9]}>
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
