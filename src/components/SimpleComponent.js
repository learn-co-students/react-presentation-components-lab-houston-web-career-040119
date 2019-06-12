// Code SimpleComponent Here

import React, {Component} from 'react';
class SimpleComponent extends Component{
    constructor(){
        super()
        this.state ={
            mood: "happy"
        }
    }
    changeMood=()=>{
        this.setState({
            mood: "sad"
        })
    }
    render(){
        return(
            <div onClick={this.changeMood}>
                {this.state.mood}
            </div>
        )
    }
}
export default SimpleComponent