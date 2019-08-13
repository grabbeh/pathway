import React from 'react'
import Box from '../standard/Box'
import Flex from '../standard/Flex'
import Heading from '../standard/Heading'
import MarkdownText from '../standard/MarkdownText'
import Animation from '../animations/InitialLoadAnimation'
import useLoad from '../../hooks/useLoad'

const StandardHero = ({ title, html }) => {
  let load = useLoad()
  return (
    <Flex flexWrap='wrap'>
      <Flex bg='blue' flex='0 0 20px' />
      <Box bg='midGrey' style={{ flex: '1' }}>
        {html ? (
          <Flex justifyContent='center'>
            <Box maxWidth={800}>
              <Flex alignItems='center' width={[1, 3 / 4, 1 / 2]} height={500}>
                <Box px={[3, 3, 0]}>
                  <Animation load={load}>
                    <Heading color='grey'>{title}</Heading>
                    <MarkdownText
                      lineHeight='subtitle'
                      fontSize={4}
                      fontWeight='subtitle'
                      html={html}
                    />
                  </Animation>
                </Box>
              </Flex>
            </Box>
          </Flex>
        ) : (
          <Box mx={[3, 6]}>
            <Flex height={500} alignItems='center'>
              <Animation load={load}>
                <Box style={{ wordWrap: 'break-word' }} px={[3, 3, 0]} width={[1, 2 / 3]}>
                  <Heading style={{ wordWrap: 'break-word' }} color='grey'>{title}</Heading>
                </Box>
              </Animation>
            </Flex>
          </Box>
        )}
      </Box>
    </Flex>
  )
}

export default StandardHero
