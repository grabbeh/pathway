import React from 'react'
import {
  Box,
  Flex,
  InternalHoverLink as HoverLink,
  Link,
  List,
  ListItem
} from '../general'
import { Logo } from './'
import { Text, Subtitle } from '../typography'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import ReactSVG from 'react-svg'

const query = graphql`
  query {
    allContentfulContactDetails {
      edges {
        node {
          name
          title
          emailAddress
          phoneNumber
        }
      }
    }
    allContentfulFooter {
      edges {
        node {
          companyNumber
          charityNumber
          companyLogo {
            fixed(width: 150) {
              ...GatsbyContentfulFixed
            }
          }
          regulatorLogo {
            file {
              url
            }
          }
          socialMediaIcons {
            url
            icon {
              description
              fixed(width: 40) {
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }
    }
    allContentfulNavigationContainer {
      edges {
        node {
          navigationItem {
            title
            subtitle
            url
          }
        }
      }
    }
  }
`

const Footer = ({ bg }) => {
  const data = useStaticQuery(query)
  const {
    allContentfulNavigationContainer,
    allContentfulFooter,
    allContentfulContactDetails
  } = data
  const navigation = allContentfulNavigationContainer.edges[0].node
  const {
    charityNumber,
    companyNumber,
    companyLogo,
    regulatorLogo,
    socialMediaIcons
  } = allContentfulFooter.edges[0].node
  const {
    name,
    title,
    emailAddress,
    phoneNumber
  } = allContentfulContactDetails.edges[0].node

  return (
    <footer>
      <Box bg={bg}>
        <Flex flexWrap='wrap'>
          <Box p={[3, 4]} width={[1, 2 / 3]}>
            <Flex flexWrap='wrap'>
              <Box width={[1, 1, 1 / 3]}>
                <Box>
                  <Logo />
                </Box>
              </Box>
              <Box width={[1, 1, 2 / 3]}>
                <Flex flexWrap='wrap'>
                  <Box width={[1, 1 / 2]}>
                    <Box ml={[0, 0, 3]} mr={3}>
                      <nav>
                        <Subtitle color='green'>Quick links</Subtitle>
                        <List>
                          {navigation.navigationItem.map(
                            ({ url, title }, i) => (
                              <ListItem fontSize={1} mb={2} key={i}>
                                <HoverLink to={`/${url}`}>{title}</HoverLink>
                              </ListItem>
                            )
                          )}
                          <ListItem fontSize={1} mb={2}>
                            <HoverLink to='/'>Terms and conditions</HoverLink>
                          </ListItem>
                          <ListItem mb={2} fontSize={1}>
                            <HoverLink to='/privacy-policy'>Privacy policy</HoverLink>
                          </ListItem>
                          <ListItem fontSize={1}>
                            <HoverLink to='/cookie-policy'>Cookie policy</HoverLink>
                          </ListItem>
                        </List>
                      </nav>
                    </Box>
                  </Box>
                  <Box width={[1, 1 / 2]}>
                    <Box mr={3}>
                      <Subtitle color='green'>Contact</Subtitle>
                      <Text fontWeight='bold' fontSize={1}>
                        {name}
                      </Text>
                      <Text fontSize={1}>{title}</Text>
                      <Box mt={3}>
                        <Text.span color='grey' fontWeight='bold' fontSize={1}>
                          Email:{' '}
                        </Text.span>
                        <Text.span color='grey' fontSize={1}>
                          {emailAddress}
                        </Text.span>
                      </Box>
                      <Box>
                        <Text.span color='grey' fontWeight='bold' fontSize={1}>
                          M:{' '}
                        </Text.span>
                        <Text.span color='grey' fontSize={1}>
                          <Link href={phoneNumber}>{phoneNumber}</Link>
                        </Text.span>
                      </Box>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box bg='grey' p={[3, 4]} width={[1, 1 / 3]}>
            <Box width={[1, 1 / 2]}>
              <Box mb={4}>
                <Box mb={3}>
                  <Image fixed={companyLogo.fixed} />
                </Box>
                <Text fontSize={1} color='white'>
                  {companyNumber}
                </Text>
                <Text fontSize={1} color='white'>
                  {charityNumber}
                </Text>
              </Box>
            </Box>
            <Flex justifyContent='space-between' flexWrap='wrap'>
              <Box minWidth={150} width={[1, 1, 1 / 2]}>
                <Flex>
                  {socialMediaIcons.map(({ icon, url }) => (
                    <Box key={url}>
                      <Box mr={3}>
                        <a href={url}>
                          <Image alt={icon.description} fixed={icon.fixed} />
                        </a>
                      </Box>
                    </Box>
                  ))}
                </Flex>
              </Box>
              <Box mt={[4, 4, 0]} width={[1, 1, 1 / 2]}>
                <Box width={125}>
                  <ReactSVG
                    alt={regulatorLogo.description}
                    src={regulatorLogo.file.url}
                  />
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </footer>
  )
}

export default Footer
