import React from 'react'
import { Box, StandardSection as Section } from '../general'
import { Subtitle } from '../typography'
import Animation from '../animations/ScrollAnimation'
import { useStaticQuery, graphql } from 'gatsby'
import { FullButton } from '../shared'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const H2 = props => <Subtitle color='blue'>{props.children}</Subtitle>
const components = {
  h2: H2
}

const query = graphql`
  query {
    supportPackage: allContentfulOnlineManualPage {
      nodes {
        content {
          childMdx {
            body
          }
        }
      }
    }
  }
`

const MainSection = () => {
  const data = useStaticQuery(query)
  const { content } = data.supportPackage.nodes[0]
  return (
    <MDXProvider components={components}>
      <Section pt={3}>
        <Animation>
          <MDXRenderer>{content.childMdx.body}</MDXRenderer>
        </Animation>
        <Animation>
          <Box width={[1, 300]} mt={[3]}>
            <FullButton
              text='Online manual'
              to='https://www.pathwaypartnership.org.uk'
            />
          </Box>
        </Animation>
      </Section>
    </MDXProvider>
  )
}

export default MainSection
