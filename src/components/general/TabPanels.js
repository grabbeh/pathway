import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import TabSlide from '../animations/TabSlide'

class TabPanels extends Component {
  static contextTypes = {
    activeIndex: PropTypes.number.isRequired
  }
  render () {
    const { children } = this.props
    const { activeIndex } = this.context
    console.log(activeIndex)
    return <div>{children[activeIndex]}</div>
  }
}

export default TabPanels
