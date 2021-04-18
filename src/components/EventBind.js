import React, { Component } from 'react'

class EventBind extends Component {

    state = {
        msg: 'Hello',
        name:'Adnan'
    }

    changeHello = () =>{
        this.setState({
            msg:'Goodbye'
        })
        console.log(this)
    }

    render() {
        const {msg,name} = this.state;
        return (
            <div>
                <div>{msg} {name}</div>
                <button onClick={this.changeHello}>Clicked</button>
            </div>
        )
    }
}

export default EventBind
