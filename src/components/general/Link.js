import React from 'react'
import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'
import isAbsoluteURL from 'is-absolute-url'
import { space, color, layout } from 'styled-system'
const isHash = str => /^#/.test(str)

const ExternalLink = styled('a')(
  {
    cursor: 'pointer',
    textDecoration: 'none'
  },
  space,
  layout,
  color
)

const InternalLink = styled(props => <GatsbyLink {...props} />)(
  { cursor: 'pointer', textDecoration: 'none' },
  space,
  layout,
  color
)

ExternalLink.defaultProps = {
  color: '#4a4a4a'
}

export default props => {
  let { href } = props
  return isHash(href) || isAbsoluteURL(href) ? (
    <ExternalLink {...props} href={href} />
  ) : (
    <InternalLink {...props} to={href} />
  )
}
