import React from 'react'
import Box from '../components/Box'
import Text from '../components/Text'
import { useStaticQuery, graphql } from 'gatsby'
import Flex from './Flex'

const Services = () => {
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
          {servicesHolder.map(({ service, serviceDescription }, i) => (
            <Box mb={3} width={[1, 1 / 2, 1 / 3]} key={i}>
              <Box mr={4}>
                <Box fontWeight='bold' fontSize={1}>
                  {service}:
                </Box>
                <Box>
                  <Text
                    lineHeight='text'
                    dangerouslySetInnerHTML={{
                      __html: serviceDescription.childMarkdownRemark.html
                    }}
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}

export default Services
