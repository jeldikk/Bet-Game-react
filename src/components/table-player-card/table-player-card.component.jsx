import React, {useEffect} from 'react'

import {connect} from 'react-redux'


import {Image} from "react-bootstrap"

import "./table-player-card.styles.scss"

import {setPlayerDetails} from "../../redux/players/players.actions"

const TablePlayerCard = (props) => {

    const {player, randomNumber} = props
    const {image, name, level, price, bet, wins, losts} = player;

    const isWinner = randomNumber === parseInt(player.bet)
    
    useEffect(()=>{
        console.log("called useEffect as componentDidMount")

        props.setPlayerDetails(player,{
            level: isWinner ? level +1 : level,
            price: isWinner ? 2*price : price,
            wins: isWinner ? wins+1 : wins,
            losts: isWinner ? losts : losts +1
        })

    },[])

    return (
        <div className={`table-player-card ${isWinner ? 'winner' : 'not-winner'}`}>
            <div className="details">
                <div className="image-container">
                    <Image src={image} />
                </div>
                <div className="description">
                    <div className="name">
                        {name}
                    </div>
                    <div className="level">
                        {level}
                    </div>
                </div>
            </div>
            <div className="score-details">
                <div className="price">
                   Price: {price}
                </div>
                <div className="bet">
                   Bet: {bet}
                </div>
                <div className="wins">
                   Wins: {wins}
                </div>
            </div>
            <div className="status">
                {
                    isWinner ? 'Won' : 'Lost'
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPlayerDetails: (player, details) => dispatch(setPlayerDetails(player, details))
    }
}

export default connect(null, mapDispatchToProps)(TablePlayerCard);
