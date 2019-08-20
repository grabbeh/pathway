import React from 'react'
import Box from '../general/Box'
import Link from '../general/InternalLink'
import Flex from '../general/Flex'
import Text from '../typography/Text'
import { FaAngleRight } from 'react-icons/fa'

const FullButton = ({ text, to }, props) => (
  <Box mt={[3, 0]}>
    <Box width={1}>
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
    </Box>
  </Box>
)

export default FullButton
