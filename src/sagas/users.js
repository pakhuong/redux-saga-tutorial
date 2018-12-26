import { call, fork, put, takeEvery } from 'redux-saga/effects';

import * as actions from '../actions/users';
import * as api from '../api/users';

function* getUsers() {
    try {
        const result = yield call(api.getUsers);

        yield put(actions.getUsersSuccess({ items: result.data.data }));
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