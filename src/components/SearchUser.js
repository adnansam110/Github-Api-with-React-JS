import React from 'react'

export const SearchUser = ({manageTimeouts}) => {
    return (
        <div>
            <input style={{display:'flex', justifyContent:'center', alignItems:'center'}} onChange={(e)=>manageTimeouts(e.target.value)} className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"></input>
        </div>
        
    )
}
