import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const query = graphql`
  query {
    logo: allContentfulLogo {
      nodes {
        logoImage {
          description
          fixed(width: 200) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
`

const Logo = () => {
  const data = useStaticQuery(query)
  const { fixed, description } = data.logo.nodes[0].logoImage
  return <Image alt={description} fixed={fixed} />
}

export default Logo
