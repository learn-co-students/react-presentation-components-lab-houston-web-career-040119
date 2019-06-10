// Code SimpleComponent Here
import React, {Component} from 'react'

export default class SimpleComponent extends Component {

  constructor(){
    super(),
    this.state = {
      mood: 'happy'
    }
  }

  changeMood = () => {
    this.setState({
      mood: this.state.mood === 'happy' ? 'sad' : 'happy'
    })
  }

  render(){
    return (
      <div onClick={this.changeMood}>
        {this.state.mood}
      </div>
    )
  }
}
