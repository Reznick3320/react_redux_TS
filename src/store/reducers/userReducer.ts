import { UserAction, UserActionType, UserState } from "../../types/todo";

    
const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, actions: UserAction): UserState => {
    switch (actions.type) {
        case UserActionType.FATCH_USERS:
            return { loading: true, error: null, users: [] }
        case UserActionType.FATCH_USERS_SUCCESS:
            return { loading: false, error: null, users: actions.payload };
        case UserActionType.FATCH_USERS_ERROR:
            return { loading: false, error: actions.payload, users: [] };
        default:
            return state; 
    }
}