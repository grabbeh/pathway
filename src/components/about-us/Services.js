import React from 'react'
import Box from '../general/Box'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import Subtitle from '../typography/Subtitle'
import Services from '../shared/Services'

const query = graphql`
  query {
    allContentfulAboutPage {
      edges {
        node {
          servicesSubtitle
          servicesHolder {
            description {
              childMarkdownRemark {
                html
              }
            }
            name
          }
        }
      }
    }
  }
`

const AboutServices = () => {
  const data = useStaticQuery(query)
  let {
    node: { servicesHolder, servicesSubtitle }
  } = data.allContentfulAboutPage.edges[0]
  return (
    <Section>
      <Box mb={3}>
        <Subtitle color='blue'>{servicesSubtitle}</Subtitle>
      </Box>
      <Services services={servicesHolder} />
    </Section>
  )
}

export default AboutServices
