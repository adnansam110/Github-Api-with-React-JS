import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    state = {
        parentName: 'Parent'
    }

    greetParent = (childName) =>{
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }

    render() {
    
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
