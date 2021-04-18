import React, { Component } from "react";
import ShowToDo from "./ShowToDo";

export default class Todos extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "Wake Up!",
      },
      {
        id: 2,
        content: "Have Breakfast!",
      },
      {
        id: 3,
        content: "Go to Office!",
      },
    ],
  };

  deltodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };
//   updatetodo = (id) => {
//     console.log(id);
//     let todos = this.state.todos.find((e) => {
//       return e.id === id;
//     });
//     console.log(todos.content + "ye match");
//     let a = prompt("enter your value");
//     if (a !== "") {
//       let update = {
//         content: a,
//         id: id,
//       };

//       let z = this.state.todos.map((v) => {
//         if (v.id !== id) {
//           return v;
//         } else {
//           return update;
//         }
//       });

//       this.setState({
//         todos: z,
//       });
//     }
//   };

  updatetodo = (id) =>{
    console.log(id)
    let newContent = prompt("Enter New Content");
    if(newContent!==""){
        let newObject = {
            id:id,
            content:newContent
        }
        let result = this.state.todos.map((todo)=>{
            if(todo.id!==id){
                return todo
            }
            else{
                return newObject
            }
        })
        this.setState({
            todos:result
        })
    }
    else{
        alert('Enter Something')
    }
    
    
    
}

  render() {
    return (
      <div>
        <ShowToDo
          todos={this.state.todos}
          deltodo={this.deltodo}
          updatetodo={this.updatetodo}
        />
      </div>
    );
  }
}
