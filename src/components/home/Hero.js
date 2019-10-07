import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ImageHero } from '../shared'

const query = graphql`
  query {
    allContentfulHomePage {
      edges {
        node {
          heroSubtitle
          heroTitle
          heroImage {
            description
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
  const {
    heroSubtitle,
    heroImage,
    mobileHeroBackgroundImage,
    heroTitle
  } = data.allContentfulHomePage.edges[0].node
  return (
    <ImageHero
      alt={heroImage.description}
      mobileBg='#4A4A4A'
      title={heroTitle}
      subtitle={heroSubtitle}
      imageData={heroImage.fluid}
      mobileBackgroundImage={mobileHeroBackgroundImage.fluid}
      bg='green'
      mobileColor='blue'
      headerColor='blue'
      subtitleColor='white'
    />
  )
}

export default Hero
