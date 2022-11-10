export enum UserActionType {
    FATCH_USERS = "FATCH_USERS",
    FATCH_USERS_SUCCESS = "FATCH_USERS_SUCCESS",
    FATCH_USERS_ERROR = "FATCH_USERS_ERROR"
}

export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

interface FetchUserActions {
    type: UserActionType.FATCH_USERS;
}

interface FetchUserSuccessAction {
    type: UserActionType.FATCH_USERS_SUCCESS;
    payload: any[];

}

interface FatchUserErrorAction {
    type: UserActionType.FATCH_USERS_ERROR;
    payload: string;
}


export type UserAction = FetchUserActions | FetchUserSuccessAction | FatchUserErrorAction;