import { takeEvery } from 'redux-saga';

import * as actions from '../actions/users';

function* getUsers() {
    try {

    } catch (e) {
        
    }
}

function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USER_REQUEST, getUsers);
}