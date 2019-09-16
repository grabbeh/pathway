import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ImageHero from '../shared/ImageHero'

const query = graphql`
  query {
    allContentfulOnlineManualPage {
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
  let { node } = data.allContentfulOnlineManualPage.edges[0]
  let { heroImage, mobileHeroBackgroundImage, heroTitle } = node

  return (
    <ImageHero
      title={heroTitle}
      imageData={heroImage.fluid}
      mobileBackgroundImage={mobileHeroBackgroundImage.fluid}
      bg='blue'
      headerColor='blue'
      mobileBg='#00A880'
    />
  )
}

export default Hero
