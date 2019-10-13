import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ImageHero } from '../shared'

const query = graphql`
  query {
    allContentfulHomelessnessPage {
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
  } = data.allContentfulHomelessnessPage.edges[0].node
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
