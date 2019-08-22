import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import SectionTitle from '../typography/SectionTitle'
import Animation from '../animations/ScrollAnimation'
import styled from 'styled-components'
import Flex from '../general/Flex'
import Text from '../typography/Text'
import Box from '../general/Box'

const query = graphql`
  query {
    allContentfulWwdPage {
      edges {
        node {
          hospitalTeamData {
            rows {
              text
              values
            }
            headers
          }
          pathwayTeamTitle
        }
      }
    }
  }
`

const PathwayTeam = () => {
  const data = useStaticQuery(query)
  let {
    pathwayTeamTitle,
    hospitalTeamData
  } = data.allContentfulWwdPage.edges[0].node

  const tableHeaders = (
    <thead>
      <Tr>
        {hospitalTeamData.headers.map((header, i) => (
          <Td key={i}>
            <Text fontWeight='bold'>{header}</Text>
          </Td>
        ))}
      </Tr>
    </thead>
  )

  const tableBody = hospitalTeamData.rows.map((row, i) => {
    return (
      <Fragment key={i}>
        <Tr>
          <Td>
            <Text textAlign='right' size='l'>
              {row.text}
            </Text>
          </Td>
          {row.values.map((column, i) => (
            <Fragment key={i}>
              {column ? (
                <Td>
                  <Flex justifyContent='center'>
                    <Box borderRadius={5} height={10} width={10} bg='green' />
                  </Flex>
                </Td>
              ) : (
                <Td>
                  <Text size='l' />
                </Td>
              )}
            </Fragment>
          ))}
        </Tr>
      </Fragment>
    )
  })

  return (
    <Section bg='lightGrey'>
      <Animation>
        <SectionTitle>{pathwayTeamTitle}</SectionTitle>
      </Animation>
      <Animation />
      <Box my={3}>
        <Table>
          {tableHeaders}
          <tbody>{tableBody}</tbody>
        </Table>
      </Box>
    </Section>
  )
}

export default PathwayTeam

const Tr = styled('tr')`
  border-bottom: 2px solid white;
`

const Table = styled('table')`
  table-layout: fixed;
  border-collapse: collapse;
`
/*
const Th = styled('th')`
padding: 10px;
width: 100px;
` */

const Td = styled('td')`
  padding: 5px;
`
