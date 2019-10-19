import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ImageHero } from '../shared'

const query = graphql`
  query {
    supportPackage: allContentfulOnlineManualPage {
      nodes {
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
`
const Hero = () => {
  const data = useStaticQuery(query)
  const {
    heroImage,
    mobileHeroBackgroundImage,
    heroTitle
  } = data.supportPackage.nodes[0]
  return (
    <ImageHero
      sidebarColor='turquoise'
      desktopHeadingColor='blue'
      mobileBg='#F5A623'
      mobileHeadingColor='grey'
      alt={heroImage.description}
      title={heroTitle}
      imageData={heroImage.fluid}
      mobileBackgroundImage={mobileHeroBackgroundImage.fluid}
    />
  )
}

export default Hero
