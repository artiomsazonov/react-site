import React, { Component } from 'react'
import './stylesNew.css';
import Fcomponent from "./Fcomponent";
//import Hcomponent from "./Hcomponent";


export default class Ccomponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Button not pressed"
    };
    this.updateData = this.updateData.bind(this)
  }
  updateData = (value) => {
    this.setState({
      name: value
    })
  }
  render() {
    return (
      <div className="container">
        <p>State:{this.state.name}</p>
        <Fcomponent updateData={this.updateData} />

      </div>
    )
  }
}
