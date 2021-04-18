import React, { Component } from 'react'

export default class Message extends Component {

    constructor(){
        super()
        this.state = {
            message:"Welcome Visitor"

        }
    }
    changeMsg(){
        this.setState({
            message:"Thankyou for Clicking me!"
        })

        
    }
    render() {
        return (
            <div>
               <h1>{this.state.message}</h1> 
               <button onClick={()=>this.changeMsg()}>Click Me!</button>
            </div>
        )
    }
}
