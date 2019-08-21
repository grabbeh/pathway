import React from 'react'
import Box from './Box'
import Flex from './Flex'
import styled, { css } from 'styled-components'

const Tab = props => (
  <Box
    onClick={props.isDisabled ? null : props.onSelect}
    onMouseEnter={props.isDisabled ? null : props.onSelect}
    onMouseLeave={props.isDisabled ? props.onSelect : null}
    style={{ pointer: 'cursor' }}
  >
    <Flex>
      <StyledNumber {...props}>{props.number + 1}</StyledNumber>
      <HideOnMobile>
        <StyledWord {...props}>{props.phase}</StyledWord>
      </HideOnMobile>
    </Flex>
  </Box>
)

const StyledWord = styled(Box)`
cursor: pointer;
font-size: 22px;
font-weight: bold;
color: #4A4A4A;
padding-top: 3px;
@media (max-width: 800px) {
  display: none;
} 
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
  color: #4a4a4a;
  padding-top: 3px;
    ${props =>
    props.color === 'green' &&
      css`
        border: 2px solid #00a880;
      `}
    ${props =>
    props.color === 'yellow' &&
      css`
        border: 2px solid #f5a623;
      `}
    ${props =>
    props.color === 'blue' &&
      css`
        border: 1px solid #37aee3;
      `}
    ${props =>
    props.isActive &&
      css`
        color: white;
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
      `};
`

export default Tab

const HideOnMobile = styled('div')(
  css({
    display: 'flex',
    '@media screen and (max-width: 1200px)': {
      display: 'none'
    }
  })
)
