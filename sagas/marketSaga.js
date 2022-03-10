import { takeLatest, call, put, select, take } from 'redux-saga/effects'
import { marketAction } from '../reducers/marketReducer'

export default [
    takeLatest(marketAction.requestMarket.type, getDataMarket)
]


function* getDataMarket(action) {
    console.log('1231231a')
}