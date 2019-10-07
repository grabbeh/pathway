import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StandardSection as Section } from '../general'
import { Subtitle } from '../typography'
import { Services } from '../shared'

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
      <Subtitle color='blue' text={servicesSubtitle} />
      <Services services={servicesHolder} />
    </Section>
  )
}

export default AboutServices
