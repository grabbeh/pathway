import React from 'react'
import Box from '../general/Box'
import Text from '../typography/Text'
import Flex from '../general/Flex'
import Logo from '../shared/Logo'
import Subtitle from '../typography/Subtitle'
import List from '../general/List'
import Link from '../general/InternalLink'
import { graphql, useStaticQuery } from 'gatsby'
import BodyText from '../typography/BodyText'
import ListItem from '../general/ListItem'

const query = graphql`
  query {
    allContentfulFooter {
      edges {
        node {
          contactDetails {
            childMarkdownRemark {
              html
            }
          }
          companyDetails {
            childMarkdownRemark {
              html
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
  const { allContentfulNavigationContainer, allContentfulFooter } = data
  const navigation = allContentfulNavigationContainer.edges[0].node
  const { companyDetails, contactDetails } = allContentfulFooter.edges[0].node

  return (
    <footer>
      <Box bg={bg}>
        <Flex flexWrap='wrap'>
          <Box p={[3, 5]} width={[1, 2 / 3]}>
            <Flex flexWrap='wrap'>
              <Box width={[1, 1 / 2, 1 / 3]}>
                <Box width={[1 / 2, 1]}>
                  <Logo />
                </Box>
              </Box>
              <Box width={[1, 1 / 2, 1 / 3]}>
                <Subtitle color='green'>Quick links</Subtitle>
                <List>
                  {navigation.navigationItem.map(({ url, title }, i) => (
                    <ListItem py={1} key={i}>
                      <Link to={`/${url}`}>
                        <Text fontSize={3}>{title}</Text>
                      </Link>
                    </ListItem>
                  ))}
                  <ListItem py={1}>
                    <Text fontSize={3}>
                      <Link to='/'>Terms and conditions</Link>
                    </Text>
                  </ListItem>
                  <ListItem py={1}>
                    <Text fontSize={3}>
                      <Link to='/privacy-policy'>Privacy policy</Link>
                    </Text>
                  </ListItem>
                </List>
              </Box>
              <Box width={[1, 1 / 2, 1 / 3]}>
                <Subtitle color='green'>Contact</Subtitle>
                <BodyText html={contactDetails.childMarkdownRemark.html} />
              </Box>
            </Flex>
          </Box>
          <Box bg='grey' p={[3, 5]} width={[1, 1 / 3]}>
            <Box>
              <Text fontSize={5} color='white' fontWeight='bold'>
                pathway
              </Text>
              <BodyText
                color='white'
                html={companyDetails.childMarkdownRemark.html}
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    </footer>
  )
}

export default Footer
