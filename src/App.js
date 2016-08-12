import React, { Component } from 'react'
import './index.css'

import MainNavigation from './components/MainNavigation'

class App extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="App">
        <MainNavigation />
          <div className="container main-content">      
            <div className="row">
                  { children }
            </div>
          </div>
      </div>
    )
  }
}

export default App
