import React, { Fragment, useContext, useState } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'
import { ThemeProvider, css } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import '../../index.css'
import { List, ListItem, OrderedList, Paragraph, Sup, Table } from '../mdx'

const components = {
  ol: OrderedList,
  table: Table,
  ul: List,
  li: ListItem,
  p: Paragraph,
  sup: Sup
}

const styles = css`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Poppins, Segoe UI, system-ui, sans-serif;
    line-height: 1.5;
  }
`

export const Context = React.createContext()
export const useAppContext = () => useContext(Context)

const Wrapper = props => {
  const [open, setOpen] = useState(false)
  const context = {
    open,
    setOpen,
    toggleOpen: () => setOpen(!open)
  }

  return (
    <Fragment>
      <Helmet>
        <html lang='en' />
      </Helmet>
      <Global styles={styles} />
      <ThemeProvider components={components} theme={theme}>
        <Context.Provider value={context}>{props.children}</Context.Provider>
      </ThemeProvider>
    </Fragment>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
