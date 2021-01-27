import React, { Component } from 'react'
import './stylesNew.css';
import Fcomponent from "./Fcomponent";
import Hcomponent from "./Hcomponent";


export default class Ccomponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ""
    };
    this.handel = this.handel.bind(this)
  }
  handel(event) {
    this.setState({
      inputValue: event.target.value
    })
  }
  render() {
    return (
      <div className="container">
        <Fcomponent input={this.state.inputValue} handel={this.handel} />
        <Hcomponent input={this.state.inputValue} />
      </div>
    )
  }
}
