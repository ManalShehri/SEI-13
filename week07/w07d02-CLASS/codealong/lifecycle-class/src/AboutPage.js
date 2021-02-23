import React, { Component } from 'react'

export default class AboutPage extends Component {
  constructor() {
    super()

    this.state = {
      counter: 0
    }

    this.incrementCounter = this.incrementCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)
  }

  componentWillReceiveProps() {
    console.log("About: Component Will Receive Props")
  }

  shouldComponentUpdate() {
    console.log("About: Should Component Update")
    return true
  }

  componentWillUpdate() {
    console.log("About: Component Will Update")
  }

  componentDidUpdate() {
    console.log("About: Component Did Update")
  }

  render() {
    console.log("About: render")
    return (
      <div>
        <h2>About</h2>
        <p>{this.state.counter}</p>
        <button onClick={this.incrementCounter}>+</button>
        <button onClick={this.decrementCounter}>-</button>
      </div>
    )
  }

  incrementCounter() {
    let { counter } = this.state
    counter++

    this.setState({
      counter
    })
  }

  decrementCounter() {
    let { counter } = this.state
    counter--

    this.setState({
      counter
    })
  }
}