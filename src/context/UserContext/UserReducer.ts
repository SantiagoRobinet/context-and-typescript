import { Payload } from "../../interfaces/Interfaces";

function UserReducer(state: any, action: Payload) {

    switch (action.type) {

        case 'GET_USERS':
            return {
                ...state,
                usersList: action.payload
            }

        case 'GET_PROFILE':
            return {
                ...state,
                selectedUser: action.payload
            }

        default:
            return state;

    }
}

export default UserReducer;