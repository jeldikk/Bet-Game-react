import PlayersActionTypes from "./players.types"

export const setPlayers = (playersList) => {
    return {
        type: PlayersActionTypes.SET_PLAYERS,
        payload: playersList
    }
}

export const selectPlayer = (player) => {
    return {
        type: PlayersActionTypes.SELECT_PLAYER,
        payload: player
    }
}

export const unselectPlayer = (player) => {
    return {
        type: PlayersActionTypes.UNSELECT_PLAYER,
        payload: player
    }
}

export const setPlayerDetails = (player, details) => {
    return {
        type: PlayersActionTypes.SET_PLAYER_DETAILS,
        payload: {
            player,
            details
        }
    }
}