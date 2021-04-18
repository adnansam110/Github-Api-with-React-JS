import React from 'react'

export default function ShowToDo({todos, deltodo, updatetodo}) {
    const todoList = todos.length ? (
        todos.map((todo)=>{
            return (
               <div className="card" style={{vw: '500px'}} key={todo.id}>
                   <div className="card-body" >
                        <p>
                        {todo.content}
                        <span style={{margin:'30px'}}>
                            <button className="btn btn-success" onClick={()=>updatetodo(todo.id)}>Update</button>
                            <button className="btn btn-danger" onClick={()=>deltodo(todo.id)}>Delete</button>
                        </span>
                        </p>
                   </div>
               </div> 
            )
        })
    ):(
        <h1 style={{color:'red'}}>There Are No Todos</h1>
    )
    return (
        <div>
            {todoList}
        </div>
    )
}
