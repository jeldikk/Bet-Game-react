import React from 'react'

import "./selected-players-sidepane.styles.scss"

import {connect} from "react-redux"
import {withRouter} from 'react-router-dom'

import {selectSelectedPlayers} from "../../redux/players/players.selectors"

import SelectedPlayerCard from "../selected-player-card/selected-player-card.component"
import { Button } from 'react-bootstrap'

const SelectedPlayersSidePane = (props) => {
    console.log(props)
    const playersLength = props.selectedPlayers.length;
    return (
        <div className="selected-players-sidepane">
            {/* <div className="logo-image">
                Here goes some logo image
            </div> */}
            {/* <h3>Selected Players Panel</h3> */}
            <div className="player-list">
                
                {
                    playersLength === 0
                    ?
                    <p className="d-flex justify-content-center align-items-center text-center">There are no players in the group</p>
                    :
                    props.selectedPlayers.map((player) => <SelectedPlayerCard key={player.name} player={player} />)
                }
            </div>
            {
                playersLength === 9 ?
                <div className="buttons text-center">
                    <Button variant="primary" size="lg" onClick={() => props.history.push('/table')}>LETS BEGIN THE SHOW</Button>
                </div> : null
            }
                 
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedPlayers: selectSelectedPlayers(state)
    }
}

export default connect(mapStateToProps, null)(withRouter(SelectedPlayersSidePane))
