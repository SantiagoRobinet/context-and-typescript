import { createContext } from "react";
import { InitialState } from "../../interfaces/Interfaces";

const initialState: InitialState = {
    usersList: [],
    selectedUser: null
};

const UserContext = createContext<typeof initialState>(initialState)

export default UserContext;