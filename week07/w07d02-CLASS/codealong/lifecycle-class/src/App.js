import React, { Component } from 'react'
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ErrorPage from './ErrorPage';

export default class App extends Component {
  constructor() {
    super()
    
    this.state = {
      page: 'home'
    }

    this.setPageToHome = this.setPageToHome.bind(this)
    this.setPageToAbout = this.setPageToAbout.bind(this)
  }

  setPageToHome(e) {
    e.preventDefault()
    this.setState({
      page: 'home',
    })
  }

  setPageToAbout(e) {
    e.preventDefault()
    this.setState({
      page: 'about',
    })
  }
  render() {
    let Page

    switch (this.state.page) {
      case 'home':
        Page = HomePage
        break;
      case 'about':
        Page = AboutPage
        break;
      default:
        Page = ErrorPage
        break;
    }
    
    return (
      <div className="page-container">
        <header>
          <h1>Component Lifecycle</h1>
          <nav>
            <a href="/" onClick={this.setPageToHome}>Home</a>
            <a href="/about" onClick={this.setPageToAbout}>About</a>
          </nav>
        </header>
        <main>
          <Page></Page>
        </main>
      </div>
    )
  }
}