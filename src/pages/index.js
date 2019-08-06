import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Flex from '../components/Flex'
import Box from '../components/Box'
import Text from '../components/Text'
//import BackgroundImage from '../components/BackgroundImage'
import styled from 'styled-components'
import { layout } from 'styled-system'
import { graphql } from 'gatsby'

import PropTypes from 'prop-types'

const Root = styled.div`
  font-family: Poppins, system-ui, sans-serif;
  line-height: 1.5;
`

const image = props =>
  props.image ? { backgroundImage: `url(${props.image})` } : null

const height = props => (props.height ? { height: props.height } : null)

const BackgroundImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  ${image} 
  ${height} 
  ${layout}
`
const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

BackgroundImage.propTypes = {
  image: PropTypes.string,
  width: numberStringOrArray
}

BackgroundImage.displayName = 'BackgroundImage'

const Heading = Text.withComponent('h1')

Heading.defaultProps = {
  fontSize: 5,
  lineHeight: 1.2,
  m: 0
}

const IndexPage = props => {
  console.log(props)
  let { node } = props.data.allContentfulHomePage.edges[0]
  let {
    childContentfulHomePageAboutTextNode,
    childContentfulHomePageIntroTaglineTextNode,
    childContentfulHomePageIntroductionTextNode
  } = node

  return (
    <Layout>
      <Root>
        <Box p={2}>
          <Text mt={0} fontWeight='bold' fontSize={3}>
            Pathway
          </Text>
        </Box>
        <Flex flexWrap='wrap'>
          <Flex bg='green' flex='0 0 20px' />
    
          <BackgroundImage>
           style={{ flex: '1' }}
           image='https://images.unsplash.com/photo-1529520161780-2573a0926b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80'
          >
            <Flex justifyContent='center'>
              <Box maxWidth={960}>
                <Flex
                  alignItems='center'
                  width={[1, 3 / 4, 1 / 2]}
                  height={800}
                >
                  <Box px={[3, 3, 0]}>
                    <Heading fontWeight='bold' color='green' fontSize={5}>
                      The Pathway Social Franchise
                    </Heading>
                    <Text color='white' fontSize={2} fontWeight='bold'>
                      The Pathway model offers a new way to help people who are
                      homeless
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </BackgroundImage>
        </Flex>
        <Box px={[3, 4, 6]} py={4}>
          <Flex justifyContent='center'>
            <Box maxWidth={960}>
              <Flex flexWrap='wrap'>
                <Box width={[1, 1 / 2]}>
                  <Box mr={3}>
                    <Text
                      fontWeight='bold'
                      color='grey'
                      fontSize={3}
                      dangerouslySetInnerHTML={{
                        __html:
                          childContentfulHomePageIntroTaglineTextNode
                            .childMarkdownRemark.html
                      }}
                    />
                  </Box>
                </Box>
                <Box mt={[4, 0]} width={[1, 1 / 2]}>
                  <Text
                    dangerouslySetInnerHTML={{
                      __html:
                        childContentfulHomePageIntroductionTextNode
                          .childMarkdownRemark.html
                    }}
                  />

                  <Text fontWeight='bold' color='green'>
                    Alex Bax,
                  </Text>
                  <Text mt={0}>Chief Executive, Pathway</Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box bg='green'>
          <Flex justifyContent='center'>
            <Box my={6} px={[3, 5]} maxWidth={960}>
              <Text
                mt={0}
                color='white'
                fontWeight='bold'
                fontSize={3}
                textAlign='center'
              >
                A review of 100 homeless A&E frequent attenders during the first
                6 months of Manchester’s MPath service showed a
              </Text>
              <Box my={4}>
                <Flex justifyContent='space-around' flexWrap='wrap'>
                  <Box width={[1,1/3]}>
                    <Text textAlign='center' fontSize={5} color='white' fontWeight='bold' mt={0}>
                      47%
                    </Text>
                    <Text textAlign='center' fontSize={4} color='white' fontWeight='bold' mt={0}>
                      reduction
                    </Text>
                    <Text textAlign='center' color='white' mt={0}>
                      in A&E attendances
                    </Text>
                  </Box>
                  <Box width={[1,1/3]}>
                    <Text textAlign='center'  fontSize={5} color='white' fontWeight='bold' mt={0}>
                      48%
                    </Text>
                    <Text textAlign='center' fontSize={4} color='white' fontWeight='bold' mt={0}>
                      reduction
                    </Text>
                    <Text textAlign='center' color='white' mt={0}>
                      in admissions
                    </Text>
                  </Box>
                  <Box width={[1,1/3]}>
                    <Text textAlign='center' fontSize={5} color='white' fontWeight='bold' mt={0}>
                      39%
                    </Text>
                    <Text textAlign='center' fontSize={4} color='white' fontWeight='bold' mt={0}>
                      reduction
                    </Text>
                    <Text textAlign='center' color='white' mt={0}>
                      in bed days
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box pb={5} px={[3, 5]}>
          <Flex justifyContent='center'>
            <Box maxWidth={960}>
              <Box>
                <Text color='blue' textAlign='center'>
                  About
                </Text>
              </Box>
              <Box>
                <Text fontSize={3} textAlign='center'>
                  Who is Pathway?
                </Text>
              </Box>
              <Box>
                <Text textAlign='center' color='blue'>
                  Pathway is the UK’s leading homeless healthcare charity. We
                  work with the NHS and other partners to create improved models
                  of care for homeless people.
                </Text>
              </Box>
              <Box>
                <Text
                  dangerouslySetInnerHTML={{
                    __html:
                      childContentfulHomePageAboutTextNode.childMarkdownRemark
                        .html
                  }}
                />
              </Box>
            </Box>
          </Flex>
        </Box>
      </Root>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allContentfulHomePage {
      edges {
        node {
          childContentfulHomePageAboutTextNode {
            childMarkdownRemark {
              html
            }
          }
          childContentfulHomePageIntroTaglineTextNode {
            childMarkdownRemark {
              html
            }
          }
          childContentfulHomePageIntroductionTextNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
