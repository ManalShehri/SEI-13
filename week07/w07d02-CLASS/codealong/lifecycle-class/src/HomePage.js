import React, { Component } from 'react'

export default class HomePage extends Component {
  constructor() {
    super()

    console.log("Home: In the constructor")
  }

  render() {
    console.log("Home: In render")
    return (
      <div>
        <h2>Home</h2>
        <p>{this.props.message}</p>
      </div>
    )
  }

  componentWillMount() {
    console.log("Home: Component Will Mount")
  }

  componentDidMount() {
    console.log("Home: Component Did Mount")
  }

  componentWillUnmount() {
    console.log("Home: Component Will Unmount")
  }
}