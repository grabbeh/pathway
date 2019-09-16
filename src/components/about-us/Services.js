import React from 'react'
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
            icon {
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`

const AboutServices = () => {
  const data = useStaticQuery(query)
  const {
    servicesHolder,
    servicesSubtitle
  } = data.allContentfulAboutPage.edges[0].node
  return (
    <Section>
      <Subtitle color='blue'>{servicesSubtitle}</Subtitle>
      <Services services={servicesHolder} />
    </Section>
  )
}

export default AboutServices
