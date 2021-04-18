export const ACTION_TYPE = {
    SETUSERS : 'Set Users',
    SEARCHUSERS: 'Search Users',
}

export const setUsers = (allUsers) => {
    return {
      type: ACTION_TYPE.SETUSERS,
      payload: allUsers,
    };
  };

export const getUser = () => {
    return dispatch => {
        fetch('https://randomuser.me/api/?page=3&results=10&seed=abc')
        .then(res=>res.json())
        .then(res=> {
            dispatch(setUsers(res.results))
            })
        .catch(err=>alert(err))
    }
}
export const searchUsers = (text) =>{
    console.log(text)
   return {
        type: ACTION_TYPE.SEARCHUSERS,
        payload: text
    }
}