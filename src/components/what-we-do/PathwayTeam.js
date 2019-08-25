import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import SectionTitle from '../typography/SectionTitle'
import Animation from '../animations/ScrollAnimation'
import styled from 'styled-components'
import Flex from '../general/Flex'
import Text from '../typography/Text'
import Box from '../general/Box'
import PathwayTeamMobile from './PathwayTeamMobile'
import useDetectMobile from '../../hooks/useDetectMobile'

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
            headers {
              text
              volume
            }
            mobile {
              oneToThirty
              thirtyToTwoHundred
              twoHundredPlus
            }
          }
          pathwayTeamTitle
        }
      }
    }
  }
`

const PathwayTeam = () => {
  const isMobile = useDetectMobile()
  const data = useStaticQuery(query)
  const {
    pathwayTeamTitle,
    hospitalTeamData
  } = data.allContentfulWwdPage.edges[0].node
  const { mobile, headers, rows } = hospitalTeamData
  const first = headers.slice(0, 1)
  const mainHeaders = headers.slice(1, headers.length)
  const tableHeaders = (
    <thead>
      <Tr>
        <Th>
          <Text color='blue' textAlign='center' fontWeight='bold' fontSize={4}>
            {first[0].text}
          </Text>
        </Th>
        {mainHeaders.map((header, i) => (
          <Td key={i}>
            <Text.span color='blue' fontWeight='bold'>
              {header.volume}{' '}
            </Text.span>
            <Text.span color='grey' fontWeight='bold'>
              {header.text}
            </Text.span>
          </Td>
        ))}
      </Tr>
    </thead>
  )

  const tableBody = rows.map((row, i) => {
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
    <Box>
      {isMobile ? (
        <Box bg='lightGrey'>
          <Animation>
            <Box px={3} pt={3}>
              <SectionTitle>{pathwayTeamTitle}</SectionTitle>
            </Box>
          </Animation>
          <Animation>
            <PathwayTeamMobile
              patientRange='1 to 30'
              dotLength={10}
              firstStat
              requirements={mobile.oneToThirty}
            />
          </Animation>
          <Animation>
            <PathwayTeamMobile
              patientRange='30 to 200'
              dotLength={30}
              requirements={mobile.thirtyToTwoHundred}
            />
          </Animation>
          <Animation>
            <PathwayTeamMobile
              patientRange='200 plus'
              dotLength={50}
              requirements={mobile.twoHundredPlus}
            />
          </Animation>
        </Box>
      ) : (
        <Section bg='lightGrey'>
          <Animation>
            <SectionTitle>{pathwayTeamTitle}</SectionTitle>
          </Animation>
          <Animation>
            <Box my={3}>
              <Table>
                {tableHeaders}
                <tbody>{tableBody}</tbody>
              </Table>
            </Box>
          </Animation>
        </Section>
      )}
    </Box>
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

const Th = styled('th')`
  width: 250px;
`

const Td = styled('td')`
  padding: 10px;
`
