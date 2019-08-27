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
        <Box width={120} p={3} top={600} zIndex='999' left={0} position='fixed'>
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
    </Fragment>
  )
}

export default SideTopicList

const TopicItem = ({ setActiveIndex, inViewId, index, active, url, title }) => {
  return (
    <ListItem
      onClick={() => {
        setActiveIndex(index)
      }}
      pb={1}
    >
      <a href={`#${url}`}>
        <Text
          color={active === index && 'green' || inViewId === url && 'green' || 'grey'}
          fontWeight={(inViewId === url && 'bold') || active === index && 'bold' || 'normal'}
          fontSize={1}
        >
          {title}
        </Text>
      </a>
    </ListItem>
  )
}
