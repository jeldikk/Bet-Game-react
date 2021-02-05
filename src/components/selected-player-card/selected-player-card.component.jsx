import React from 'react'

import {Image} from 'react-bootstrap'

import "./selected-player-card.styles.scss"

const SelectedPlayerCard = ({player, tabled}) => {

    const {image, name, wins, bet, price} = player;

    
    return (
        
        <div className="selected-player-card">
            <div className="image-container">
                <Image src={image} />
            </div>
            <div className="details">
                <div className="name">
                    {name}
                </div>
                <div className="wins-bet">
                    <div className="wins">
                        Wins: {wins}
                    </div>
                    <div className="bet">
                        Bets: {bet}
                    </div>
                </div>
            </div>
            <div className="price">
                {price}
            </div>
        </div>
    )
}

export default SelectedPlayerCard
