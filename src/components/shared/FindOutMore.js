import React from 'react'
import Box from '../general/Box'
import Text from '../typography/Text'
import Flex from '../general/Flex'
import Circle from '../../svg/Circle'
import SectionTitle from '../typography/SectionTitle'
import FullButton from './FullButton'
/*
const query = graphql`
  query {
    allContentfulNavigationContainer {
      edges {
        node {
          navigationItem {
            title
            url
          }
        }
      }
    }
  }
`
*/
const FindOutMore = ({ bg, homelessness, whatwedo, howyoucanhelp }) => {
  // const data = useStaticQuery(query)
  // let { node } = data.allContentfulNavigationContainer.edges[0]
  return (
    <Box bg={bg}>
      <Box py={5} mx={[3, 6]}>
        <SectionTitle>Find out more...</SectionTitle>
        <Text>
          Below you can find more information on homelessness, how Pathway
          helps, and how you can get involved
        </Text>
        <Box mt={3}>
          <Flex flexWrap='wrap'>
            {homelessness && (
              <SiteSection text='Homelessness' to='/homelessness'>
                <Text textAlign='center'>
                  <Circle size={125} />
                </Text>
              </SiteSection>
            )}
            {whatwedo && (
              <SiteSection text='What we do' to='/what-we-do'>
                <Text textAlign='center'>
                  <Circle size={125} />
                </Text>
              </SiteSection>
            )}
            {howyoucanhelp && (
              <SiteSection text='How you can help' to='/what-you-can-do'>
                <Text textAlign='center'>
                  <Circle size={125} />
                </Text>
              </SiteSection>
            )}
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default FindOutMore

const SiteSection = ({ children, text, to }) => (
  <Box width={[1, 1 / 2, 1 / 3]}>
    <Box mr={[0, 4]} mb={3}>
      <Box mb={3}>
        <Text textAlign='center'>{children}</Text>
      </Box>
      <FullButton text={text} to={to} />
    </Box>
  </Box>
)
