import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ImageHero from '../shared/ImageHero'

const query = graphql`
  query {
    allContentfulHomePage {
      edges {
        node {
          heroSubtitle
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
  let { node } = data.allContentfulHomePage.edges[0]
  let { heroSubtitle, heroImage, heroTitle } = node

  return (
    <ImageHero
      mobileBg='grey'
      title={heroTitle}
      subtitle={heroSubtitle}
      imageData={heroImage.fluid}
      bg='green'
      headerColor='blue'
      subtitleColor='white'
    />
  )
}

export default Hero
