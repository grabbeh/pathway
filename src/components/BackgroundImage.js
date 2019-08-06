import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => (
    <StaticQuery query={graphql`
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
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.allContentfulHomePage.headerImage.fluid
       return (
          <BackgroundImage Tag="section"
                           className={className}
                           fluid={imageData}
                           backgroundColor={`#040e18`}
          >
    {children}
          </BackgroundImage>
       )
     }
     }
    />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection
