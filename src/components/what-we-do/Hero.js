import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ImageHero from '../shared/ImageHero'

const query = graphql`
  query {
    allContentfulWwdPage {
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
  let { node } = data.allContentfulWwdPage.edges[0]
  let { heroImage, mobileHeroBackgroundImage, heroTitle } = node

  return (
    <ImageHero
      bg='green'
      mobileBg='#37AEE3'
      mobileColor='white'
      title={heroTitle}
      imageData={heroImage.fluid}
      mobileBackgroundImage={mobileHeroBackgroundImage.fluid}
      headerColor='yellow'
    />
  )
}

export default Hero
