import { takeEvery, call, put, all } from "redux-saga/effects";
import axios from "axios";
import watchSearch from "./searchSaga";

function* fetchDataSagas() {
    try {
        const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/posts");
        yield put({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (error) {
        yield put({ type: "FETCH_FAILURE", payload: error.message });
    }
}

export default function* rootSaga() {
    yield all([takeEvery("FETCH_REQUEST", fetchDataSagas), watchSearch()]);
}