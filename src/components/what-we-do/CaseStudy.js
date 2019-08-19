import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/WideSection'
import Box from '../general/Box'
import Tagline from '../typography/Tagline'
import Subtitle from '../typography/Subtitle'
import BodyText from '../typography/BodyText'
import Animation from '../animations/ScrollAnimation'
import Flex from '../general/Flex'

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
  let { node } = data.allContentfulWwdPage.edges[0]
  let { wwdCaseStudy, wwdCaseStudySubtitle } = node

  return (
    <Section bg='blue'>
      <Animation>
        <Flex flexWrap='wrap'>
          <Box width={[1, 1 / 3]}>
            <Flex height='100%' alignItems='center'>
              <Box>
                <Tagline
                  color='grey'
                  html={wwdCaseStudySubtitle.childMarkdownRemark.html}
                />
              </Box>
            </Flex>
          </Box>
          <Box width={[1, 2 / 3]}>
            <Flex justifyContent='center'>
              <Box width={[1, 0.9]}>
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
