import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ImageHero } from '../shared/index'

const query = graphql`
  query {
    allContentfulAboutPage {
      edges {
        node {
          heroSubtitle {
            childMarkdownRemark {
              html
            }
          }
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
    heroSubtitle,
    heroImage,
    mobileHeroBackgroundImage,
    heroTitle
  } = data.allContentfulAboutPage.edges[0].node
  return (
    <ImageHero
      mobileBg='black'
      mobileColor='white'
      title={heroTitle}
      subtitle={heroSubtitle.childMarkdownRemark.html}
      imageData={heroImage.fluid}
      mobileBackgroundImage={mobileHeroBackgroundImage.fluid}
      bg='blue'
      headerColor='green'
      subtitleColor='white'
    />
  )
}

export default Hero
