import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const query = graphql`
  query {
    allContentfulLogo {
      edges {
        node {
          logoImage {
            description
            fixed(width: 200) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

const Logo = () => {
  const data = useStaticQuery(query)
  const { fixed, description } = data.allContentfulLogo.edges[0].node.logoImage
  return <Image alt={description} fixed={fixed} />
}

export default Logo
