import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const query = graphql`
  query {
    allContentfulLogo {
      edges {
        node {
          logoImage {
            fluid(maxWidth: 225) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const Logo = () => {
  const data = useStaticQuery(query)
  const imageData = data.allContentfulLogo.edges[0].node.logoImage.fluid
  return <Image fluid={imageData} />
}

export default Logo
