import React, { useState, useEffect } from 'react'
import Cookies from 'universal-cookie'
import { Box, Button, Flex } from '../general'
import { Text } from '../typography'
const cookies = new Cookies()

const CookieBanner = () => {
  let [closedNotice, setClosedNotice] = useState(false)
  let [previouslyClicked, setPreviouslyClicked] = useState(false)

  const setCookie = () => {
    cookies.set('userHasClosedNotice', true, { path: '/', maxAge: 2592000 })
    setClosedNotice(true)
  }

  useEffect(() => {
    const existing = cookies.get('userHasClosedNotice')
    if (existing) {
      setPreviouslyClicked(true)
    }
  }, [])

  return (
    <Box>
      {!previouslyClicked && !closedNotice && (
        <Box
          bg='blue'
          zIndex={999}
          p={2}
          position='fixed'
          bottom={0}
          left={0}
          width={1}
        >
          <Flex flexWrap='wrap'>
            <Flex
              alignItems='center'
              flex='1 1 600px'
              justifyContent='flex-start'
            >
              <Text color='white' fontSize={0}>
                By using this website you agree to our cookie policy. We use
                cookies to operate the site and for analytics (so we can
                understand how people are interacting with the site)
              </Text>
            </Flex>
            <Flex
              alignItems='flex-end'
              justifyContent={['flex-start', 'flex-end']}
            >
              <Box mt={[2, 2, 0]} ml={[0, 3, 3]}>
                <Button
                  px={3}
                  py={1}
                  onClick={() => {
                    setCookie()
                  }}
                >
                  <Text fontWeight='bold'>Close</Text>
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Box>
      )}
    </Box>
  )
}

export default CookieBanner
