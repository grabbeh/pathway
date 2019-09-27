import React from 'react'
import Box from '../general/Box'
import Text from '../typography/Text'
import Flex from '../general/Flex'
import Logo from '../shared/Logo'
import Subtitle from '../typography/Subtitle'
import List from '../general/List'
import Link from '../general/InternalHoverLink'
import { graphql, useStaticQuery } from 'gatsby'
import ListItem from '../general/ListItem'
import Image from 'gatsby-image'

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
            fixed(width: 150) {
              ...GatsbyContentfulFixed
            }
          }
          socialMediaIcons {
            url
            icon {
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
                <Box mr={3}>
                  <Logo />
                </Box>
              </Box>
              <Box width={[1, 1, 2 / 3]}>
                <Flex flexWrap='wrap'>
                  
                    <Box width={[1, 1, 1 / 2]}>
                  
                      <Box mr={3}>
                        <nav>
                        <Subtitle color='green'>Quick links</Subtitle>
                        <List>
                          {navigation.navigationItem.map(
                            ({ url, title }, i) => (
                              <ListItem fontSize={1} mb={2} key={i}>
                                <Link to={`/${url}`}>{title}</Link>
                              </ListItem>
                            )
                          )}
                          <ListItem fontSize={1} mb={2}>
                            <Link to='/'>Terms and conditions</Link>
                          </ListItem>
                          <ListItem fontSize={1}>
                            <Link to='/privacy-policy'>Privacy policy</Link>
                          </ListItem>
                        </List>
                        </nav>
                      </Box>
                    </Box>
                 
                  <Box width={[1, 1, 1 / 2]}>
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
                          {phoneNumber}
                        </Text.span>
                      </Box>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box bg='grey' p={[3, 4]} width={[1, 1, 1 / 3]}>
            <Flex flexDirection={['column','column', 'row']} flexWrap='wrap'>
              <Box width={[1, 1, 1 / 2]}>
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
                <Flex>
                  {socialMediaIcons.map(({ icon, url }) => (
                    <Box key={url}>
                      <Box mr={3}>
                        <a href={url}>
                          <Image fixed={icon.fixed} />
                        </a>
                      </Box>
                    </Box>
                  ))}
                </Flex>
              </Box>
              <Box mt={[3, 0]} width={[1, 1, 1 / 2]}>
                <Flex
                  height='100%'
                  justifyContent={['flex-start', 'flex-start', 'flex-end']}
                  alignItems='flex-end'
                  
                >
                  <Box>
                    <Image fixed={regulatorLogo.fixed} />
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </footer>
  )
}

export default Footer
