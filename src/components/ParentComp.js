import React, { Component } from 'react'
import PureComp from './PureComp';
import RegularComp from './RegularComp';

export class ParentComp extends Component {

    state ={
        name:'Adnan'
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Adnan'
            })
        },2000)
    }

    render() {
        console.log('********Parent Component Render*********')
        const {name} = this.state;
        return (
            <div>
                Parent Component
                <RegularComp name={name}/>
                <PureComp name={name}/>
            </div>
        )
    }
}

export default ParentComp
