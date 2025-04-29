import { takeLatest, call, put, delay } from "redux-saga/effects";

import axios from "axios";

function* handleSearch(action) {
    try {
        yield delay(300);
        const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/posts?id=${action.payload}`)
        yield put({ type: "SEARCH_SUCCESS", payload: response.data })
    } catch (error) {
        yield put({ type: "SEARCH_FAILURE", payload: error.message })
    }
}

export default function* watchSearch() {
    yield takeLatest("SEARCH_REQUEST", handleSearch);
}