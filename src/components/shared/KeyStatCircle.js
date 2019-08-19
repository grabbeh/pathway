import React from 'react'
import Box from '../general/Box'
import MarkdownText from '../general/MarkdownText'
import Text from '../typography/Text'
import Circle from '../../svg/Circle'

const KeyFactCircle = ({ width = '82%', mainContent, intro }) => (
  <Box
    position='relative'
    mt={5}
    ml={[3, 5]}
    mb={[3, 0]}
    borderRadius='50%'
    height={0}
    style={{
      width: '82%',
      padding: '41% 0'
    }}
    bg='yellow'
  >
    <Box top={0} left={0} position='absolute'>
      <Circle color='#37AEE3' size={150} />
    </Box>
    <Box py={3} px={[4, 5]} mt={[-50, -100]}>
      <Box px={[2, 4]}>
        <Text textAlign='center' color='grey'>
          {intro}
        </Text>
      </Box>
      <MarkdownText
        textAlign='center'
        fontSize={[2, 3, 4]}
        fontWeight='subtitle'
        lineHeight='subtitle'
        color='white'
        html={mainContent}
      />
    </Box>
  </Box>
)

export default KeyFactCircle
