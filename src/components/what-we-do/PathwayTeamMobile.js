import React from 'react'
import { Box, Flex, List, ListItem } from '../general/index'
import { Text } from '../typography/index'
import styled from '@emotion/styled'

const MobileStatBox = ({
  patientRange,
  firstStat,
  requirements,
  dotLength
}) => (
  <Box borderBottom='3px solid white' p={3}>
    <Box mb={2}>
      <Dots dotLength={dotLength} />
    </Box>
    <Box mb={2}>
      <Text.span fontSize={3} fontWeight='bold' color='blue'>
        Hospitals seeing {patientRange}
      </Text.span>
      <Text.span color='grey' fontWeight='bold'>
        {' '}
        homeless patients each year need
        {firstStat ? '...' : ' all the above plus...'}
      </Text.span>
    </Box>
    <Box>
      {requirements.map(requirement => (
        <List pb={2} key={requirement}>
          <StyledListItem>
            <Text.span color='grey'>{requirement}</Text.span>
          </StyledListItem>
        </List>
      ))}
    </Box>
  </Box>
)

export default MobileStatBox

const Dot = () => (
  <Box mr={2} mb={1} bg='yellow' width={8} height={8} borderRadius={5} />
)

const Dots = ({ dotLength }) => {
  const dotsArray = []
  for (var i = 0; i < dotLength; i++) {
    dotsArray.push(<Dot key={i} />)
  }
  return <Flex flexWrap='wrap'>{dotsArray}</Flex>
}

const StyledListItem = styled(ListItem)`
  :before {
    content: '+';
    color: #00a880;
    font-weight: bold;
    font-size: 20px;
    margin-right: 4px;
  }
`
