import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ImageHero from '../shared/ImageHero'

const Hero = ({ bg, color, url, title, subtitle }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHomePage {
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
  `)

  let { node } = data.allContentfulHomePage.edges[0]
  let { heroSubtitle, heroImage, heroTitle } = node

  return (
    <ImageHero
      title={heroTitle}
      subtitle={heroSubtitle.childMarkdownRemark.html}
      imageData={heroImage.fluid}
      bg='green'
      headerColor='blue'
      subtitleColor='white'
    />
  )
}

export default Hero
