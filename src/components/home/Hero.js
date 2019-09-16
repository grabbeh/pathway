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
  let { node } = data.allContentfulHomePage.edges[0]
  let { heroSubtitle, heroImage, mobileHeroBackgroundImage, heroTitle } = node

  return (
    <ImageHero
      mobileBg='#4A4A4A'
      title={heroTitle}
      subtitle={heroSubtitle}
      imageData={heroImage.fluid}
      mobileBackgroundImage={mobileHeroBackgroundImage.fluid}
      bg='green'
      headerColor='blue'
      subtitleColor='white'
    />
  )
}

export default Hero
