import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StandardSection as Section } from '../general'
import { Subtitle } from '../typography'
import { Services } from '../shared'

const query = graphql`
  query {
    allContentfulAboutPage {
      nodes {
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
`

const AboutServices = () => {
  const data = useStaticQuery(query)
  const {
    servicesHolder,
    servicesSubtitle
  } = data.allContentfulAboutPage.nodes[0]
  return (
    <Section>
      <Subtitle color='blue' text={servicesSubtitle} />
      <Services services={servicesHolder} />
    </Section>
  )
}

export default AboutServices
