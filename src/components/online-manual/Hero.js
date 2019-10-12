import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ImageHero } from '../shared'

const query = graphql`
  query {
    allContentfulOnlineManualPage {
      edges {
        node {
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
    heroImage,
    mobileHeroBackgroundImage,
    heroTitle
  } = data.allContentfulOnlineManualPage.edges[0].node
  return (
    <ImageHero
      bg='turquoise'
      headerColor='blue'
      mobileBg='#F5A623'
      mobileColor='grey'
      alt={heroImage.description}
      title={heroTitle}
      imageData={heroImage.fluid}
      mobileBackgroundImage={mobileHeroBackgroundImage.fluid}
    />
  )
}

export default Hero
