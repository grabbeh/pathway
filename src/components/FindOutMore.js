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
            <Box mr={[0, 3]}>
              <Box mb={3}>
                <Circle />
              </Box>
              <FullButton text='About' link='/' />
            </Box>
          </Box>
          <Box width={[1, 1 / 3]}>
            <Box mb={3} mr={[0, 3]}> 
                <Circle />
              </Box>
              <FullButton text='Go' link='/' />
            </Box>
          </Box>
          <Box width={[1, 1 / 3]}>
            <Box mb={3}>
                <Circle />
              </Box>
              <FullButton text='Franchise' link='/franchise' />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  </Flex>
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
            <Text width={1} mt={10} fontSize={4} textAlign='center' color='white'>
              <FaAngleRight />
            </Text>
          </Flex>
        </Flex>
      </Link>
    </Button>
  </Box>
)

const Circle = () => (
  <svg
    width='168'
    height='168'
    viewBox='0 0 168 168'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M84 168C130.392 168 168 130.392 168 84C168 37.6081 130.392 0 84 0C37.6081 0 0 37.6081 0 84C0 130.392 37.6081 168 84 168Z'
      fill='#F7B100'
    />
  </svg>
)
