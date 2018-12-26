import { call, fork, takeEvery } from 'redux-saga/effects';

import * as actions from '../actions/users';
import * as api from '../api/users';

function* getUsers() {
    try {

    } catch (e) {

    }
}

function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USER_REQUEST, getUsers);
}

const usersSaga = [
    fork(watchGetUsersRequest)
];

export default usersSaga;