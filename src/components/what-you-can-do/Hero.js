import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ImageHero } from '../shared'

const query = graphql`
  query {
    allContentfulWhatYouCanDoPage {
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
  } = data.allContentfulWhatYouCanDoPage.edges[0].node

  return (
    <ImageHero
      alt={heroImage.description}
      sidebarColor='blue'
      mobileBg='#F5A623'
      mobileHeadingColor='grey'
      title={heroTitle}
      imageData={heroImage.fluid}
      mobileBackgroundImage={mobileHeroBackgroundImage.fluid}
      desktopHeadingColor='green'
    />
  )
}

export default Hero
