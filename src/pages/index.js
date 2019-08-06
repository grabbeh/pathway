import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Flex from '../components/Flex'
import Box from '../components/Box'
import Text from '../components/Text'
import CenterSection from '../components/CenterSection'
import Stats from '../components/Stats'
import { graphql } from 'gatsby'
import Hero from '../components/Hero'

const IndexPage = props => {
  let { node } = props.data.allContentfulHomePage.edges[0]
  let {
    childContentfulHomePageAboutTextNode,
    childContentfulHomePageIntroTaglineTextNode,
    childContentfulHomePageIntroductionTextNode
  } = node

  return (
    <Layout>
      <SEO title='Home' />
      <Hero />
      <CenterSection>
        <Flex flexWrap='wrap'>
          <Box width={[1, 1 / 2]}>
            <Box borderBottom='7px solid' borderColor='green' mr={4}>
              <Text
                fontWeight='bold'
                fontSize={3}
                dangerouslySetInnerHTML={{
                  __html:
                    childContentfulHomePageIntroTaglineTextNode
                      .childMarkdownRemark.html
                }}
              />
            </Box>
          </Box>
          <Box mt={[4, 2]} width={[1, 1 / 2]}>
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
      </CenterSection>
      <Box bg='green'>
        <CenterSection>
          <Stats />
        </CenterSection>
      </Box>
      <CenterSection>
        <Box mb={3}>
          <Text fontWeight='bold' fontSize={3} textAlign='center'>
            Who is Pathway?
          </Text>
        </Box>
        <Box>
          <Text fontSize={3} textAlign='center' color='blue'>
            Pathway is the UK’s leading homeless healthcare charity. We work
            with the NHS and other partners to create improved models of care
            for homeless people.
          </Text>
        </Box>
        <Box>
          <Text
            dangerouslySetInnerHTML={{
              __html:
                childContentfulHomePageAboutTextNode.childMarkdownRemark.html
            }}
          />
        </Box>
      </CenterSection>
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
