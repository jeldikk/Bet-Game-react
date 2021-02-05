import PlayersActionTypes from "./players.types"

const INITIAL_STATE= {
    playersList: []
}

const playersReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case PlayersActionTypes.SET_PLAYERS:
            return {
                ...state,
                playersList: action.payload
            }
        case PlayersActionTypes.SELECT_PLAYER:
            return {
                ...state,
                playersList: state.playersList.map((player) => player.name === action.payload.name ? {...player, selected: true} : player)
            }
        case PlayersActionTypes.UNSELECT_PLAYER:
            return {
                ...state,
                playersList: state.playersList.map((player) => player.name === action.payload.name ? {...player, selected: false} : player)
            }
        case PlayersActionTypes.SET_PLAYER_DETAILS:
            return {
                ...state,
                playersList: state.playersList.map((player) => player.name === action.payload.player.name ? {...player, ...action.payload.details} : player)
            }
        default:
            return state
    }
}

export default playersReducer;