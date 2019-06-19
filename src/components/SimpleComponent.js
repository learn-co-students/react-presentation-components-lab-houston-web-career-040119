// Code SimpleComponent Here
import React from 'react';

export default class Component extends React.Component{
    constructor(){
        super()
        this.state={
            mood:"happy"
        }
    }

    handleClick=()=>{
        let emo;
        if(this.state.mood === "happy"){
            emo = "sad"
        }else{
            emo="happy"
        }
        this.setState({
            mood:emo
        })
    }

    render(){
        return(
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}