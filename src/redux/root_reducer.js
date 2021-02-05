import {combineReducers} from 'redux'

import playersReducer from "./players/players.reducers"


const rootReducer = combineReducers({
    players: playersReducer
})

export default rootReducer