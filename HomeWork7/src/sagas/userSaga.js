import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUserFailure, fetchUserRequest, fetchUserSuccess } from '../store/userReduser';

async function fetchUserApi(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
        throw new Error('Something go wrong')
    }
    return await response.json();
}

function* fetchUser(action) {
    try {
        const data = yield call(fetchUserApi, action.payload)
        yield put(fetchUserSuccess(data))
    } catch (error) {
        yield put(fetchUserFailure(error.message))
    }
}

function* userSaga() {
    yield takeEvery(fetchUserRequest.type, fetchUser);
}

export default userSaga;