import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const InternalLink = styled(props => <Link {...props} />)`
  cursor: pointer;
  text-decoration: none;
  color: #4a4a4a;
  transition: all ease 0.3s;
  &:hover {
    color: #00a880;
    border-bottom: 2px #00a880 solid;
  }
`

export default InternalLink
