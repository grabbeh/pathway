import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ImageHero from '../shared/ImageHero'

const query = graphql`
  query {
    allContentfulHomelessnessPage {
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
  let { node } = data.allContentfulHomelessnessPage.edges[0]
  let { heroImage, heroTitle } = node

  return (
    <ImageHero
      mobileBg='black'
      title={heroTitle}
      imageData={heroImage.fluid}
      bg='yellow'
      headerColor='white'
    />
  )
}

export default Hero
