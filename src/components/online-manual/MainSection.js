import React from 'react'
import { Box, StandardSection as Section } from '../general/index'
import { BodyText, SectionTitle, Subtitle } from '../typography/index'
import Animation from '../animations/ScrollAnimation'
import { useStaticQuery, graphql } from 'gatsby'
import { FullButton } from '../shared/index'

const query = graphql`
  query {
    allContentfulOnlineManualPage {
      edges {
        node {
          content {
            childMarkdownRemark {
              html
            }
          }
          title
          subtitle
        }
      }
    }
  }
`

const MainSection = () => {
  const data = useStaticQuery(query)
  const {
    title,
    subtitle,
    content
  } = data.allContentfulOnlineManualPage.edges[0].node

  return (
    <Section>
      <Animation>
        <SectionTitle text={title} />
      </Animation>
      <Box>
        <Animation>
          <Subtitle color='blue' text={subtitle} />
        </Animation>
      </Box>
      <Box>
        <Animation>
          <BodyText html={content.childMarkdownRemark.html} />
        </Animation>
      </Box>
      <Box width={[1, 300]} mt={[3, 5]}>
        <FullButton text='Online manual' to='/' />
      </Box>
    </Section>
  )
}

export default MainSection
