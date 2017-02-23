import React, { Component } from 'react'

import DevTools from '../DevTools'

class Frame extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <h1>this is frame.</h1>
        <DevTools />
        {children}
      </div>
    )
  }
}
export default Frame;