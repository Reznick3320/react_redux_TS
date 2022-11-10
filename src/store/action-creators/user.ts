import axios from "axios";
import { Dispatch } from "redux";
import { UserAction, UserActionType } from "../../types/todo";



export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionType.FATCH_USERS});
            const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {
                dispatch({type: UserActionType.FATCH_USERS_SUCCESS, payload: responce.data})
            }, 1000)

        } catch(e) {
            dispatch({type: UserActionType.FATCH_USERS_ERROR, payload: "Произошла ошибка"})
            
        }
    } 
}