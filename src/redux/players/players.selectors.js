import {createSelector} from 'reselect'

const selectPlayers = (state) => state.players;

export const selectPlayersList = createSelector(
    [selectPlayers],
    (playersObj) => playersObj.playersList
)

export const selectSelectedPlayers = createSelector(
    [selectPlayersList],
    (playerslist) => {
        const list = playerslist.filter((player) => player.selected)
        
        return list.length === 0 ? [] : list
    }
)

export const selectSelectedPlayersCount = createSelector(
    [selectSelectedPlayers],
    (playerslist) => playerslist.length
)