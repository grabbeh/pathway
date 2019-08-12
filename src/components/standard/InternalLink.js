import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const InternalLink = styled(props => <Link {...props} />)`
  cursor: pointer;
  text-decoration: none;
  color: 'white';
`

export default InternalLink
