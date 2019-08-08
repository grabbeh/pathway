import React from 'react'
import Box from './Box'
import Text from './Text'
import Link from './InternalLink'
import Button from './Button'
import Flex from './Flex'
import { FaAngleRight } from 'react-icons/fa'

const FindOutMore = () => (
  <Flex justifyContent='center'>
    <Box mx={[3, 6]} maxWidth={800} py={5}>
      <Text fontSize={5} fontWeight='subtitle' color='grey'>
        Find out more...
      </Text>
      <Text fontSize={3}>
        Below you can find more information on homelessness, how Pathway helps,
        and how you can get involved
      </Text>
      <Box mt={3}>
        <Flex justifyContent='space-between' flexWrap='wrap'>
          <Box width={[1, 1 / 3]}>
            <FullButton text='About' link='/About' />
          </Box>
          <Box width={[1, 1 / 3]}>
            <FullButton text='Go' link='/Go' />
          </Box>
          <Box width={[1, 1 / 3]}>
            <FullButton text='Franchise' link='/Franchise' />
          </Box>
        </Flex>
      </Box>
    </Box>
  </Flex>
)

export default FindOutMore

const FullButton = ({ text, link }) => (
  <Box mt={[3, 0]}>
    <Button>
      <Link to={link}>
        <Flex minWidth={200} width={[1, 200]} flexWrap='wrap'>
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
            <Text mt={10} fontSize={4} textAlign='center' color='white'>
              <FaAngleRight />
            </Text>
          </Flex>
        </Flex>
      </Link>
    </Button>
  </Box>
)
