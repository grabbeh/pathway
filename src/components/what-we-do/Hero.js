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
        }
      }
    }
  }
`
const Hero = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulWwdPage.edges[0]
  let { heroImage, heroTitle } = node

  return (
    <ImageHero
      mobileBg='blue'
      mobileColor='white'
      title={heroTitle}
      imageData={heroImage.fluid}
      bg='green'
      headerColor='yellow'
    />
  )
}

export default Hero
