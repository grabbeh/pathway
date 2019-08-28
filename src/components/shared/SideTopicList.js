import React, { useState, Fragment } from 'react'
import Box from '../general/Box'
import Text from '../typography/Text'
import List from '../general/List'
import ListItem from '../general/ListItem'
import changeCase from 'change-case'
import useDetectWidth from '../../hooks/useDetectWidth'
import { useAppContext } from '../shared/Wrapper'

const SideTopicList = ({ topics }) => {
  const [active, setActiveIndex] = useState()
  const { isWideDesktop } = useDetectWidth()
  const items = topics.map(topic => {
    return {
      url: changeCase.hyphenCase(topic),
      title: topic
    }
  })

  let state = useAppContext()
  return (
    <Fragment>
    {state.viewId &&
        <Box width={120} p={3} top={100} zIndex='999' left={0} position='fixed'>
          <List>
            {items.map(({ url, title }, i) => {
              return (
                <TopicItem
                  inViewId={state.viewId}
                  setActiveIndex={setActiveIndex}
                  active={active}
                  index={i}
                  url={url}
                  title={title}
                  key={i}
                />
              )
            })}
          </List>
        
        </Box>
    }
    </Fragment>
  )
}

export default SideTopicList

const TopicItem = ({ setActiveIndex, inViewId, index, active, url, title }) => {
  console.log(url)
  console.log(inViewId)
  return (
    <ListItem
      onClick={() => {
        setActiveIndex(index)
      }}
      pb={1}
    >
      <a href={`#${url}`}>
        <Text
          color={inViewId === url && 'black' || 'grey'}
          fontWeight={(inViewId === url && 'bold') && 'bold' || 'normal'}
          fontSize={1}
        >
          {title}
        </Text>
      </a>
    </ListItem>
  )
}
