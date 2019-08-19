import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ImageHero from '../shared/ImageHero'

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
        }
      }
    }
  }
`
const Hero = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulAboutPage.edges[0]
  let { heroSubtitle, heroImage, heroTitle } = node

  return (
    <ImageHero
      mobileBg='black'
      title={heroTitle}
      subtitle={heroSubtitle.childMarkdownRemark.html}
      imageData={heroImage.fluid}
      bg='blue'
      headerColor='green'
      subtitleColor='white'
    />
  )
}

export default Hero
