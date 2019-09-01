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
    return <TabSlide active={activeIndex}>{children[activeIndex]}</TabSlide>
  }
}

export default TabPanels
