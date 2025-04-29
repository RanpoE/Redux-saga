import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import combineReducers from './reducers'
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: combineReducers,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});


sagaMiddleware.run(rootSaga);

export default store;