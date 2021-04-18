import React from 'react'

export default function FunctionClick() {
   let clickHandler = () => {
            console.log('Button Clicked!')
    }

    return (
        
        <div>
            <button onClick={clickHandler}>Click!</button>
        </div>
    )
}
