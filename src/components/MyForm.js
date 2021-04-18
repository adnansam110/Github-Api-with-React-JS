import React, { Component } from 'react'

export class MyForm extends Component {
    state={
        name:'Guest',
        age:null,
        pass:null,
        show:false
    }

    getPass =(e)=>{
        let pass = e.target.value;
        if(pass.length>0 && pass.length<10)
        {
            this.setState({
                pass
            })
        }
        else{
            this.setState({
                pass:null
            })
        }
    }
    getAge =(e)=>{
        let age = e.target.value;
        if(age>18)
        {
            this.setState({
                age
            })
        }
        else{
            this.setState({
                age:null
            })
        }
    }
    getName=(e)=>{
        this.setState({
            name: e.target.value
        })
    }
    showResult = (e) =>{
        const {pass, age} =this.state;
        if(pass!==null && age!==null)
        {
            this.setState({
                show:true
            })
        }
        else{
            alert('Please enter Valid data')
        }
    }
    render() {
        const {name, show}= this.state;
        return (
            <div>
               {show?<h1>Hello {name}</h1>:null}
                <input type="text"className="form-control" placeholder="Enter Name..." onChange={this.getName}/>
                <br/>
                <input className="form-control" placeholder="Enter Age..." onChange={this.getAge}/>
                <br/>
                <input type='password' className="form-control" placeholder="Enter Password..."onChange={this.getPass} />
                <br/>
                <button className="btn btn-info" onClick={this.showResult}>Validate</button>
            </div>
        )
    }
}

export default MyForm
