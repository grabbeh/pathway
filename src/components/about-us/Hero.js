import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ImageHero } from '../shared'

const query = graphql`
  query {
    allContentfulAboutPage {
      nodes {
        heroSubtitle {
          childMarkdownRemark {
            html
          }
        }
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
    heroSubtitle,
    heroImage,
    mobileHeroBackgroundImage,
    heroTitle
  } = data.allContentfulAboutPage.nodes[0]
  return (
    <ImageHero
      alt={heroImage.description}
      mobileBg='#00A880'
      mobileHeadingColor='white'
      title={heroTitle}
      subtitle={heroSubtitle.childMarkdownRemark.html}
      imageData={heroImage.fluid}
      mobileBackgroundImage={mobileHeroBackgroundImage.fluid}
      sidebarColor='blue'
      desktopHeadingColor='green'
      subtitleColor='white'
    />
  )
}

export default Hero
