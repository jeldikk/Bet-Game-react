import {createStore, applyMiddleware} from 'redux'

import logger from 'redux-logger'

import rootReducer from "./root_reducer"

const middleWare = []

if(process.env.NODE_ENV === 'development'){
    middleWare.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleWare))

export default store;