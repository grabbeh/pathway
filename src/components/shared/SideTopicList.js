import React from 'react'
import Box from '../general/Box'
import Text from '../typography/Text'
import List from '../general/List'
import ListItem from '../general/ListItem'
import changeCase from 'change-case'
import { useAppContext } from '../shared/Wrapper'
import ShowOnDesktop from './ShowOnWideDesktop'

const SideTopicList = ({ topics }) => {
  const items = topics.map(topic => {
    return {
      url: changeCase.hyphenCase(topic),
      title: topic
    }
  })

  let state = useAppContext()
  return (
    <ShowOnDesktop>
      {state.viewId && (
        <Box width={120} p={3} top={100} zIndex='999' left={0} position='fixed'>
          <List>
            {items.map(({ url, title }, i) => {
              return (
                <TopicItem
                  inViewId={state.viewId}
                  url={url}
                  title={title}
                  key={i}
                />
              )
            })}
          </List>
        </Box>
      )}
    </ShowOnDesktop>
  )
}

export default SideTopicList

const TopicItem = ({ inViewId, url, title }) => {
  let match = false
  if (url === inViewId) {
    match = true
  }
  return (
    <ListItem pb={1}>
      <a href={`#${url}`}>
        <Text fontWeight={(match && 'bold') || 'normal'} fontSize={1}>
          {title}
        </Text>
      </a>
    </ListItem>
  )
}
