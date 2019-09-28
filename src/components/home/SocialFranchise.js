import React from 'react'
import Subtitle from '../typography/Subtitle'
import Section from '../general/WideSection'
import Box from '../general/Box'
import { useStaticQuery, graphql } from 'gatsby'
import Flex from '../general/Flex'
import Text from '../typography/Text'
import Animation from '../animations/ScrollAnimation'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

const Bold = props => <Text.span color='green' {...props} />

const components = {
  strong: Bold
}

const query = graphql`
  query {
    allContentfulHomePage {
      edges {
        node {
          socialFranchiseSubtitle
          socialFranchiseDescription {
            childMdx {
              body
            }
          }
        }
      }
    }
  }
`

const SocialFranchise = () => {
  const data = useStaticQuery(query)
  const {
    socialFranchiseDescription,
    socialFranchiseSubtitle
  } = data.allContentfulHomePage.edges[0].node
  return (
    <MDXProvider components={components}>
      <Section pt={3} pb={3} bg='lightGrey'>
        <Animation>
          <Flex alignItems='center' flexWrap='wrap'>
            <Box width={[1, 1, 1 / 3]}>
              <Subtitle color='green'>{socialFranchiseSubtitle}</Subtitle>
            </Box>
            <Box width={[1, 1, 2 / 3]}>
              <Box>
                {' '}
                <MDXRenderer>
                  {socialFranchiseDescription.childMdx.body}
                </MDXRenderer>
              </Box>
            </Box>
          </Flex>
        </Animation>
      </Section>
    </MDXProvider>
  )
}

export default SocialFranchise
