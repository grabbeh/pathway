import React from 'react'
import { Box, StandardSection as Section } from '../general'
import { SectionTitle, Subtitle, IntroTitle } from '../typography'
import { graphql, useStaticQuery } from 'gatsby'
import Animation from '../animations/ScrollAnimation'
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
        <IntroTitle text={aboutIntroTitle} color='green' />
        <SectionTitle text={aboutTitle} />
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
