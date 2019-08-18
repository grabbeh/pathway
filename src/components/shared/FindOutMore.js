import React from 'react'
import Box from '../general/Box'
import Text from '../typography/Text'
import Link from '../general/InternalLink'
import Button from '../general/Button'
import Flex from '../general/Flex'
import Circle from '../../svg/Circle'
import SectionTitle from '../typography/SectionTitle'
import { FaAngleRight } from 'react-icons/fa'

const FindOutMore = ({ bg, homelessness, whatwedo, howyoucanhelp }) => (
  <Box bg={bg}>
    <Box py={5} mx={[3, 6]} width={[1, 800, 1000]}>
      <SectionTitle>Find out more...</SectionTitle>
      <Text>
        Below you can find more information on homelessness, how Pathway helps,
        and how you can get involved
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

export default FindOutMore

const SiteSection = ({ children, text, to }) => (
  <Box width={[1, 1 / 2, 1 / 3]}>
    <Box mr={4} mb={3}>
      <Box mb={3}>
        <Text textAlign='center'>{children}</Text>
      </Box>
      <FullButton text={text} to={to} />
    </Box>
  </Box>
)

const FullButton = ({ text, to }, props) => (
  <Box mt={[3, 0]}>
    <Button width={1}>
      <Link {...props} to={to}>
        <Box>
          <Flex flexWrap='wrap'>
            <Box style={{ flex: '1' }} bg='blue' p={2}>
              <Text
                fontSize={4}
                textAlign='center'
                fontWeight='subtitle'
                color='white'
              >
                {text}
              </Text>
            </Box>
            <Flex flex='0 0 50px' bg='turquoise'>
              <Text
                width={1}
                mt={10}
                fontSize={4}
                textAlign='center'
                color='white'
              >
                <FaAngleRight />
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Link>
    </Button>
  </Box>
)
