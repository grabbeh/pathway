import React from 'react'
import Box from './Box'
import Flex from './Flex'
import Text from '../typography/Text'
import styled, { css } from 'styled-components'

const Tab = props => {
  console.log(props)
  return (
    <Box
      onClick={props.isDisabled ? null : props.onSelect}
      style={{ pointer: 'cursor' }}
    >
      <Flex flexWrap='wrap'>
        <StyledNumber {...props}>{props.number + 1}</StyledNumber>
        <Text fontSize={4}>{props.phase}</Text>
      </Flex>
    </Box>
  )
}

const StyledWord = styled(Box)`
font-size: 22px;
font-weight: bold;
color: #4A4A4A;
${props =>
    props.color === 'green' &&
  props.isActive &&
  css`
    color: #00a880;
  `}
  ${props =>
    props.color === 'yellow' &&
    props.isActive &&
    css`
      color: #f5a623;
    `}
    ${props =>
    props.color === 'blue' &&
      props.isActive &&
      css`
        color: #37aee3;
      `}
`

const StyledNumber = styled(Box)`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-right: 20px;
  height: 40px;
  border-radius: 100%;
  width: 40px;
  cursor: pointer;
  color: #4A4A4A;
  padding-top: 3px;
  ${props =>
    props.color === 'green' &&
    css`
      border: 1px solid #00a880;
    `}
    ${props =>
    props.color === 'yellow' &&
      css`
        border: 1px solid #f5a623;
      `}
      ${props =>
    props.color === 'blue' &&
        css`
          border: 1px solid #37aee3;
        `}
  
  ${props =>
    props.color === 'green' &&
    props.isActive &&
    css`
      background: #00a880;
      color: white;
    `}
    ${props =>
    props.color === 'yellow' &&
      props.isActive &&
      css`
        background: #f5a623;
        color: white;
      `}
      ${props =>
    props.color === 'blue' &&
        props.isActive &&
        css`
          background: #37aee3;
          color: white;
        `}
    ${props =>
    props.isActive &&
      css`
        color: white;
      `}
 
`

export default Tab
