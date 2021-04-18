import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    increaseCount(){
        // this.setState({
        //     count:this.state.count+1
        // },()=> console.log("CallBack Value of Count",this.state.count))
        // console.log(this.state.count);

        this.setState((prevState)=> ({
            count: prevState.count + 1
        }))
    }
    restCount(){
        this.setState({
            count: 0
        })
        
    }
    incrementFive(){
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
    }
    render() {
        return (
            <div>
                <p>Count - {this.state.count}</p>
                <button onClick={()=>this.incrementFive()}>Increment!</button>
                <button onClick={()=>this.restCount()}>Reset!</button>
            </div>
        )
    }
}
