import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ImageHero } from '../shared'

const query = graphql`
  query {
    homelessnessPage: allContentfulHomelessnessPage {
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
  } = data.homelessnessPage.nodes[0]
  return (
    <ImageHero
      alt={heroImage.description}
      sidebarColor='yellow'
      mobileBg='#518399'
      mobileHeadingColor='white'
      title={heroTitle}
      imageData={heroImage.fluid}
      mobileBackgroundImage={mobileHeroBackgroundImage.fluid}
      desktopHeadingColor='white'
    />
  )
}

export default Hero
