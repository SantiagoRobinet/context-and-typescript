export interface User {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export interface InitialState {
    usersList: User[],
    selectedUser?: User | null,
    getUsersList?: () => Promise<void>
}

export interface Payload {
    type: string,
    payload: User[] | User
}