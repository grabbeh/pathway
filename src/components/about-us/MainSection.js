import React from 'react'
import Box from '../general/Box'
import { graphql, useStaticQuery } from 'gatsby'
import Section from '../general/StandardSection'
import Animation from '../animations/ScrollAnimation'
import Subtitle from '../typography/Subtitle'
import IntroTitle from '../typography/IntroTitle'
import SectionTitle from '../typography/SectionTitle'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const query = graphql`
  query {
    allContentfulAboutPage {
      edges {
        node {
          aboutIntroTitle
          aboutTitle
          aboutSubtitle {
            childMarkdownRemark {
              html
            }
          }
          aboutDescription {
            childMdx {
              body
            }
          }
        }
      }
    }
  }
`

const AboutSection = () => {
  const data = useStaticQuery(query)
  const {
    aboutTitle,
    aboutIntroTitle,
    aboutDescription,
    aboutSubtitle
  } = data.allContentfulAboutPage.edges[0].node
  return (
    <Section>
      <Animation>
        <IntroTitle color='green'>{aboutIntroTitle}</IntroTitle>
        <SectionTitle>{aboutTitle}</SectionTitle>
      </Animation>
      <Box>
        <Animation>
          <Subtitle
            color='green'
            html={aboutSubtitle.childMarkdownRemark.html}
          />
        </Animation>
      </Box>
      <Box>
        <Animation>
          <MDXRenderer>{aboutDescription.childMdx.body}</MDXRenderer>
        </Animation>
      </Box>
    </Section>
  )
}

export default AboutSection
