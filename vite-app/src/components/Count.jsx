//this is using setState in class component
//snip is rce
import React, { Component } from 'react'

//snip rconst
class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

    increment() {
        this.setState({
            count:this.state.count+1
        })
        console.log(this.state.count)
    }
    
  render() {
    return (
      <>
        <div>Count -  {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </>
    );
  }
}

export default Count