import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler = ()=>{
        console.log('CLicked the Button')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click ME!</button>
            </div>
        )
    }
}

export default ClassClick
