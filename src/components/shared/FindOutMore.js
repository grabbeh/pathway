import React from 'react'
import Box from '../general/Box'
import Text from '../general/Text'
import Link from '../general/InternalLink'
import Button from '../general/Button'
import Flex from '../general/Flex'
import { FaAngleRight } from 'react-icons/fa'
import Circle from '../../svg/Circle'
import SectionTitle from '../general/SectionTitle'

const FindOutMore = ({ bg, homelessness, whatwedo, howyoucanhelp }) => (
  <Box bg={bg}>
    <Flex justifyContent='center'>
      <Box mx={[3, 6]} maxWidth={800} py={5}>
        <SectionTitle>Find out more...</SectionTitle>
        <Text>
          Below you can find more information on homelessness, how Pathway
          helps, and how you can get involved
        </Text>
        <Box mt={3}>
          <Flex justifyContent='space-between' flexWrap='wrap'>
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
              <SiteSection text='How you can help' to='/franchise'>
                <Text textAlign='center'>
                  <Circle size={125} />
                </Text>
              </SiteSection>
            )}
          </Flex>
        </Box>
      </Box>
    </Flex>
  </Box>
)

export default FindOutMore

const SiteSection = ({ children, text, to }) => (
  <Box minWidth={200} width={[1, 1 / 2, 1 / 3]}>
    <Box mb={3}>
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
        <Flex flexWrap='wrap'>
          <Box style={{ wordWrap: 'break-word' }} style={{ flex: '1' }} bg='blue' p={2}>
            <Text
              fontSize={4}
              textAlign='center'
              fontWeight='subtitle'
              color='white'
              style={{ wordWrap: 'break-word' }}
            >
              {text}
            </Text>
          </Box>
          <Flex bg='turquoise' flex='0 0 50px'>
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
      </Link>
    </Button>
  </Box>
)
