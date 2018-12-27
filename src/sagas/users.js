import { call, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects';

import * as actions from '../actions/users';
import * as api from '../api/users';

function* getUsers() {
    try {
        const result = yield call(api.getUsers);
        yield put(actions.getUsersSuccess({ items: result.data.data }));
    } catch (err) {

    }
}

function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USER_REQUEST, getUsers);
}

function* createUser(action) {
    try {
        yield call(api.createUser, { 
            firstName: action.payload.firstName, 
            lastName: action.payload.lastName 
        });
        
        yield call(getUsers);
    } catch (err) {
        
    }
}

function* watchCreateUserRequest() {
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

function* deleteUser({ userId }) {
    try {
        yield call(api.deleteUser, { userId });
        yield call(api.getUsers);
    } catch (err) {
        
    }
}

function* watchDeleteUserRequest() {
    while (true) {
        const action = yield take(actions.Types.DELETE_USER_REQUEST);
        yield call(deleteUser, { userId: action.payload.userId });
        yield call(getUsers);
    }
}

const usersSaga = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest)
];

export default usersSaga;