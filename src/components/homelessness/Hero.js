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
          mobileHeroBackgroundImage {
            fluid(maxWidth: 400) {
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
  let { heroImage, mobileHeroBackgroundImage, heroTitle } = node

  return (
    <ImageHero
      bg='yellow'
      mobileBg='black'
      mobileColor='white'
      title={heroTitle}
      imageData={heroImage.fluid}
      mobileBackgroundImage={mobileHeroBackgroundImage.fluid}
      headerColor='white'
    />
  )
}

export default Hero
