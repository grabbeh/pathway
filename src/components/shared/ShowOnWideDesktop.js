import styled from 'styled-components'

const ShowOnDesktop = styled('div')`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
  }
`
export default ShowOnDesktop
