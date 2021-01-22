import React, { Component } from 'react'

export default class Ccomponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count:0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment(){
  this.setState(state=>({
    count: state.count+1
  }))};

  decrement(){
    this.setState(state=>({
     count: state.count-1
  }))};
  reset(){  
    this.setState({    
        count:0
    })
}
  
  render() {  
    return (
      <div> 
        <button onClick={this.increment}>in</button>      
        <button onClick={this.decrement}>de</button>
        <button onClick={this.reset}>re</button>
        <h1>Current:{this.state.count}</h1>
      </div>
    )
  }
}
