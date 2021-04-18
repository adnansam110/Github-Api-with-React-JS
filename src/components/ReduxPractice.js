import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {getUser, searchUsers}  from '../store/action/action';
import { SearchUser } from './SearchUser';


const ReduxPractice = ({ getUser, users, searchUsers }) => {
    const timeOut = useRef(null)
    useEffect(() => {
        getUser();
    }, []);

const manageTimeouts = (text) =>{
    if(timeOut.current){
        clearTimeout(timeOut.current)
    }
    timeOut.current = setTimeout(searchingUsers, 500, text)
}

const searchingUsers = (text) =>{
    text=text.toLowerCase()
    searchUsers(text)
}
    return (
        <div>
            <SearchUser manageTimeouts={manageTimeouts}/>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Icon</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index) =>{
                        return (
                            <tr style={{cursor:'pointer'}}key={index} onClick={()=>alert(`You hurt ${user.name.first}`)}>
                                <th scope="row">
                                    <img style={{borderRadius:'50%'}} src={user.picture.thumbnail}></img>
                                </th>
                                <td>{user.name.first}</td>
                                <td>{user.name.last}</td>
                                <td>{user.email}</td>
                            </tr>
                         )
                         })}
                    
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProp = state => ({
    users: state.root.users,
});
const mapDispatchToProp = (dispatch) =>
    bindActionCreators(
    {
     getUser,
     searchUsers
    },dispatch,);



export default connect(mapStateToProp, mapDispatchToProp)(ReduxPractice);