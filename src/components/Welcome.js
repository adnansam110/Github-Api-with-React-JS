import React, { Component } from 'react'

export default class Welcome extends Component {
    
    render() {
        const {name,hero} = this.props;
        return (
            <div>
               
                <h1>Hello {name} a.k.a {hero}</h1>
                
            </div>

            
        )
    }
}
