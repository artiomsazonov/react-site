import React, { Component } from 'react'

export default class Hcomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h2>Render input</h2>
        <p>{this.props.input}</p>
      </div>
    )
  }
}

