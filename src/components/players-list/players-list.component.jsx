import React from 'react'

import PlayerCard from "../player-card/player-card.component"

import "./players-list.styles.scss"

const PlayersList = ({playersList}) => {
    return (
        <div className="players-info-table">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Level</th>
                        <th>Avatar</th>
                        <th>Bet</th>
                        <th>Wins</th>
                        <th>Lost</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        playersList.map((player) => <PlayerCard key={player.Name} player={player} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PlayersList
