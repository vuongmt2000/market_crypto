import { all } from 'redux-saga/effects'
import marketSaga from './marketSaga'
export default function* rootSaga() {
    yield all([
        ...marketSaga
    ])
}