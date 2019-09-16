import React from 'react'
import Section from '../general/StandardSection'
import Box from '../general/Box'
import SectionTitle from '../typography/SectionTitle'
import Subtitle from '../typography/Subtitle'
import BodyText from '../typography/BodyText'
import Animation from '../animations/ScrollAnimation'
import { useStaticQuery, graphql } from 'gatsby'
import FullButton from '../shared/FullButton'

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
  let { node } = data.allContentfulOnlineManualPage.edges[0]
  let { title, subtitle, content } = node

  return (
    <Section>
      <Animation>
        <SectionTitle>{title}</SectionTitle>
      </Animation>
      <Box>
        <Animation>
          <Subtitle color='blue'>{subtitle}</Subtitle>
        </Animation>
      </Box>
      <Box>
        <Animation>
          <BodyText html={content.childMarkdownRemark.html} />
        </Animation>
      </Box>
      <Box width={[1, 300]} mt={5}>
        <FullButton text='Online manual' to='/' />
      </Box>
    </Section>
  )
}

export default MainSection
