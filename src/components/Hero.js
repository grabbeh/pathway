import React from 'react'
import Heading from './Heading'
import Flex from './general/Flex'
import Box from './general/Box'
import MarkdownText from './general/Text'
import BackgroundImage from './BackgroundImage'
import { useStaticQuery, graphql } from 'gatsby'
import LoadAnimation from './InitialLoadAnimation'
import useLoad from '../hooks/useLoad'

const Hero = () => {
  let load = useLoad()
  const data = useStaticQuery(graphql`
    query {
      allContentfulHomePage {
        edges {
          node {
            childContentfulHomePageHeroSubtitleTextNode {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `)

  let { node } = data.allContentfulHomePage.edges[0]
  let { childContentfulHomePageHeroSubtitleTextNode } = node

  return (
    <Flex flexWrap='wrap'>
      <Flex bg='green' flex='0 0 20px' />
      <BackgroundImage style={{ flex: '1' }}>
        <Flex justifyContent='center'>
          <Box maxWidth={800}>
            <Flex alignItems='center' width={[1, 3 / 4, 1 / 2]} height={500}>
              <Box px={[3, 3, 0]}>
                <LoadAnimation load={load}>
                  <Heading>Pathway Social Franchise</Heading>
                  <MarkdownText
                    color='white'
                    lineHeight='subtitle'
                    fontSize={4}
                    fontWeight='subtitle'
                    html={
                      childContentfulHomePageHeroSubtitleTextNode
                        .childMarkdownRemark.html
                    }
                  />
                </LoadAnimation>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </BackgroundImage>
    </Flex>
  )
}

export default Hero
