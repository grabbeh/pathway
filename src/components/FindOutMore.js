import React from 'react'
import Box from './Box'
import Text from './Text'
import Link from './InternalLink'
import Button from './Button'
import Flex from './Flex'
import { FaAngleRight } from 'react-icons/fa'
import Circle from '../svg/Circle'

const FindOutMore = ({ bg, homelessness, whatwedo, howyoucanhelp }) => (
  <Box bg={bg}>
    <Flex justifyContent='center'>
      <Box mx={[3, 6]} maxWidth={800} py={5}>
        <Text fontSize={5} fontWeight='subtitle' color='grey'>
          Find out more...
        </Text>
        <Text fontSize={3}>
          Below you can find more information on homelessness, how Pathway
          helps, and how you can get involved
        </Text>
        <Box mt={3}>
          <Flex justifyContent='space-between' flexWrap='wrap'>
            {homelessness && (
              <Box width={[1, 1 / 3]}>
                <Box mb={3} mr={[0, 3]}>
                  <Box mb={3}>
                    <Text textAlign='center'>
                      <Circle size={125} />
                    </Text>
                  </Box>
                  <FullButton text='Homelessness' link='/about-us' />
                </Box>
              </Box>
            )}
            {whatwedo && (
              <Box width={[1, 1 / 3]}>
                <Box mb={3} mr={[0, 3]}>
                  <Box mb={3}>
                    <Text textAlign='center'>
                      <Circle size={125} />
                    </Text>
                  </Box>
                  <FullButton text='What we do' link='/' />
                </Box>
              </Box>
            )}
            {howyoucanhelp && (
              <Box width={[1, 1 / 3]}>
                <Box mb={3}>
                  <Box mb={3}>
                    <Text textAlign='center'>
                      <Circle size={125} />
                    </Text>
                  </Box>
                  <FullButton text='How you can help' link='/franchise' />
                </Box>
              </Box>
            )}
          </Flex>
        </Box>
      </Box>
    </Flex>
  </Box>
)

export default FindOutMore

const FullButton = ({ text, link }) => (
  <Box mt={[3, 0]}>
    <Button width={1}>
      <Link to={link}>
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
