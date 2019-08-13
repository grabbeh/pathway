import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const query = graphql`
  query {
    allContentfulHomePage {
      edges {
        node {
          headerImage {
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const BackgroundSection = ({ style, children }) => {
  const data = useStaticQuery(query)
  const imageData = data.allContentfulHomePage.edges[0].node.headerImage.fluid
  return (
    <BackgroundImage
      style={style}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      {children}
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection
