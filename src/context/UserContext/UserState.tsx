import React, { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import { InitialState } from '../../interfaces/Interfaces'
import axios from "axios";

function UserState({children}: any) {

    const initialState: InitialState = {
        usersList: [],
        selectedUser: null
    }

    const [state , dispatch] = useReducer(UserReducer, initialState);

    const getUsersList = async () => {
        const users = await axios.get('https://reqres.in/api/users');
        console.log( users )
        dispatch(
            {
                type: 'GET_USERS',
                payload: users.data
            }
        )
    }

    return(
       <UserContext.Provider value={
           {
               usersList: state.usersList,
               selectedUser: state.selectedUser,
               getUsersList,
           }
       }>
           {children}
       </UserContext.Provider>
    )
}

export default UserState;