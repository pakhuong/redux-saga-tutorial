export const Types = {
    GET_USER_REQUEST: 'users/get_users_request',
    GET_USER_SUCCESS: 'users/get_users_success'
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