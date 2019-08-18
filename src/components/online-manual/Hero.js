import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ImageHero from '../shared/ImageHero'

const query = graphql`
  query {
    allContentfulOnlineManualPage {
      edges {
        node {
          heroTitle
          heroImage {
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
const Hero = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulOnlineManualPage.edges[0]
  let { heroImage, heroTitle } = node

  return (
    <ImageHero
      title={heroTitle}
      imageData={heroImage.fluid}
      bg='green'
      headerColor='blue'
    />
  )
}

export default Hero
