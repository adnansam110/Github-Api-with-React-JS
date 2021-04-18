import React, { Component } from 'react'

export class Form extends Component {

    state ={
        username: '',
        comments:'',
        topic:'REACT'
    }
    handleUsernameChange = (e)=>{
        this.setState({
            username: e.target.value
        })
    }
    handleCommentChange = (e)=>{
        this.setState({
            comments: e.target.value
        })
    }
    handleTopicChange = (e) =>{
        this.setState({
            topic: e.target.value
        })
    }
    handleSubmit =(e) =>{
        const {username, comments, topic} = this.state;
        alert(`${username} ${topic} ${comments}`)
        e.preventDefault();
    }
    render() {
        const {username, comments, topic} = this.state;
        return (
           <form>
               <div>
                   <label>Username</label>
                   <input type='text' value={username} onChange={this.handleUsernameChange}/>
               </div>
               <br/>
               <div>
                   <label>Comments</label>
                   <textarea value={comments} onChange={this.handleCommentChange}></textarea>
               </div>
               <div>
                   <lable>Topic</lable>
                   <select value={topic} onChange={this.handleTopicChange}>
                       <option>REACT</option>
                       <option>Angular</option>
                       <option>Vue</option>
                   </select>
               </div>
               <br/>
               <div>
                 <input type='submit' value='Submit' onClick={this.handleSubmit}/>
               </div>
           </form>
        )
    }
}

export default Form
