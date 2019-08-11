import React from 'react'
import Box from './Box'
import Text from './Text'
import MarkdownText from './MarkdownText'
import { useStaticQuery, graphql } from 'gatsby'
import Flex from './Flex'
import Animation from './ScrollAnimation'

const query = graphql`
  query {
    allContentfulAboutPage {
      edges {
        node {
          servicesHolder {
            serviceDescription {
              childMarkdownRemark {
                html
              }
            }
            service
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
          {servicesHolder.map(({ service, serviceDescription }, i) => {
            console.log(i)
            return (
              <Box mb={3} width={[1, 1 / 2, 1 / 3]} key={i}>
                <Animation delay={i * 250}>
                  <Box mr={4}>
                    <Box fontWeight='bold' fontSize={1}>
                      {service}:
                    </Box>
                    <Box>
                      <MarkdownText
                        lineHeight='text'
                        html={serviceDescription.childMarkdownRemark.html}
                      />
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
