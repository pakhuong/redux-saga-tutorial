export const Types = {
    GET_USER_REQUEST: 'users/get_users_request',
    GET_USER_SUCCESS: 'users/get_users_success',
    CREATE_USER_REQUEST: 'users/create_user_request'
};

export const getUsersRequest = () => ({
    type: Types.GET_USER_REQUEST
});

export const getUsersSuccess = ({ items }) => ({
    type: Types.GET_USER_SUCCESS,
    payload: {
        items
    }
});

export const createUserRequest = ({ firstName, lastName }) => ({
    type: Types.CREATE_USER_REQUEST,
    payload: {
        firstName,
        lastName
    }
});