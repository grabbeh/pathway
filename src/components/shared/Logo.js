import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const query = graphql`
  query {
    allContentfulLogo {
      edges {
        node {
          logoImage {
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
  const { fixed } = data.allContentfulLogo.edges[0].node.logoImage
  return <Image fixed={fixed} />
}

export default Logo
