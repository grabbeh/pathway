import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const InternalLink = styled(props => <Link {...props} />)`
  cursor: pointer;
  text-decoration: none;
  color: #4a4a4a;
  transition: all ease 0.3s;
`

export default InternalLink
