import React, { Component, PureComponent } from 'react'

class PureCounterComponent extends PureComponent {

    constructor(props) {
      super(props)
      const initialState = 0
      this.state = {
         count:0,
         toggle:false
      }
    }
    handleAdd = ()=>{
        if(this.state.toggle){
            this.setState({count:this.state.count+1})
        }else {
            this.setState({count:this.state.count})
        }
        
    }

    handleToggle =()=>{
        this.setState({toggle:!this.state.toggle})
    }
  render() {
    console.log("Hi i am pure component.")

    return (
      <>
      <div>
        <h2>Pure Counter App</h2>
        <h3>{this.state.count} </h3>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleToggle}>click to add</button>
      </div>
      </>
    )
  }
}

export default PureCounterComponent