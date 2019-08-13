import React from 'react'
import Box from '../general/Box'
import Text from '../general/Text'
import BodyText from '../general/BodyText'
import { useStaticQuery, graphql } from 'gatsby'
import Flex from '../general/Flex'
import Animation from '../animations/ScrollAnimation'

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
    <Flex justifyContent='center'>
      <Box mx={[3, 6]} maxWidth={800} py={5}>
        <Box mb={3}>
          <Text color='blue' fontSize={4} fontWeight='subtitle'>
            Other Pathway services
          </Text>
        </Box>
        <Flex flexWrap='wrap'>
          {servicesHolder.map(({ name, description }, i) => {
            console.log(i)
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
      </Box>
    </Flex>
  )
}

export default Services
