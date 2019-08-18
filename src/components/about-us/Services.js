import React from 'react'
import Box from '../general/Box'
import BodyText from '../typography/BodyText'
import { useStaticQuery, graphql } from 'gatsby'
import Flex from '../general/Flex'
import Animation from '../animations/ScrollAnimation'
import Section from '../general/StandardSection'
import Subtitle from '../typography/Subtitle'

const query = graphql`
  query {
    allContentfulAboutPage {
      edges {
        node {
          servicesHolder {
            description {
              childMarkdownRemark {
                html
              }
            }
            name
          }
        }
      }
    }
  }
`

const Services = () => {
  const data = useStaticQuery(query)
  let {
    node: { servicesHolder }
  } = data.allContentfulAboutPage.edges[0]

  return (
    <Section>
      <Box mb={3}>
        <Subtitle color='blue'>Other Pathway services</Subtitle>
      </Box>
      <Flex flexWrap='wrap'>
        {servicesHolder.map(({ name, description }, i) => {
          return (
            <Box mb={3} width={[1, 1 / 2, 1 / 3]} key={i}>
              <Animation>
                <Box mr={4}>
                  <Box fontWeight='bold' fontSize={1}>
                    {name}:
                  </Box>
                  <Box>
                    <BodyText html={description.childMarkdownRemark.html} />
                  </Box>
                </Box>
              </Animation>
            </Box>
          )
        })}
      </Flex>
    </Section>
  )
}

export default Services
