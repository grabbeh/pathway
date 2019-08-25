import styled from 'styled-components'

const ShowOnMobile = styled('div')`
  display: none;
  @media (max-width: 896px) {
    display: flex;
  }
`
export default ShowOnMobile
