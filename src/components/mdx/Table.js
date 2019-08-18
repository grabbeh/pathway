import styled from 'styled-components'

export const Table = styled('table')`
  margin-top: 10px;
  width: 100%;
  border-collapse: collapse;
  & thead th {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: right;
  }

  & tbody td {
    border-bottom: 2px solid white;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: right;
  }

  & tbody > tr {
    display: table-row;
  }
`
export default Table
