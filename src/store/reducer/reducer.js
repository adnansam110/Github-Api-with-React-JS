import {ACTION_TYPE, searchUsers} from '../action/action'

const INITIAL_STATE = {
    users: [],
    allUsers: [],
} 

export default (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case ACTION_TYPE.SETUSERS:
            return{
                ...state,
                users:action.payload,
                allUsers:action.payload
            }
        case ACTION_TYPE.SEARCHUSERS:
            if(action.payload){
                const searcheduser = state.allUsers.filter(user=>{
                    return user.name.first.toLowerCase().includes(action.payload)
                })
            return{
                ...state,
                users: searcheduser
            }
        }
        else{
            return {
                ...state,
                users: state.allUsers
            }
        }
        default:
            return state

    }
}   