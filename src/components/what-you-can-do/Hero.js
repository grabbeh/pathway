import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ImageHero } from '../shared/index'

const query = graphql`
  query {
    allContentfulWhatYouCanDoPage {
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
  const {
    heroImage,
    mobileHeroBackgroundImage,
    heroTitle
  } = data.allContentfulWhatYouCanDoPage.edges[0].node

  return (
    <ImageHero
      bg='blue'
      mobileBg='#F5A623'
      mobileColor='white'
      title={heroTitle}
      imageData={heroImage.fluid}
      mobileBackgroundImage={mobileHeroBackgroundImage.fluid}
      headerColor='green'
    />
  )
}

export default Hero
