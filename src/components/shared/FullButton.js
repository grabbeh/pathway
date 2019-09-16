import React from 'react'
import Box from '../general/Box'
import Link from '../general/InternalLink'
import Flex from '../general/Flex'
import Text from '../typography/Text'
import { FaAngleRight } from 'react-icons/fa'
import ListItem from '../general/ListItem'
import styled from 'styled-components'

const FullButton = ({ text, to }, props) => (
  <ListItem width={1}>
    <StyledBox>
      <Link {...props} to={to}>
        <Flex>
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
          <Flex alignItems='center' pt={2} flex='0 0 50px' bg='turquoise'>
            <StyledArrow>
              <Text width={1} fontSize={4} textAlign='center' color='white'>
                <FaAngleRight />
              </Text>
            </StyledArrow>
          </Flex>
        </Flex>
      </Link>
    </StyledBox>
  </ListItem>
)

export default FullButton

const StyledBox = styled('div')``

const StyledArrow = styled('div')`
  padding-left: 15px;
  transition: all 0.3s ease 0s;
  ${StyledBox}:hover & {
    padding-left: 20px;
  }
`
