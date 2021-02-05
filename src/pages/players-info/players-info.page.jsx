import React, { Component } from 'react'

import {connect} from "react-redux"
import {fetchPlayersData} from "../../axios/axios.util"

import "./players-info.styles.scss"

import PlayersList from "../../components/players-list/players-list.component"
import Pagination from "../../components/pagination/pagination.component"

import SelectedPlayersSidePane from "../../components/selected-players-sidepane/selected-players-sidepane.component"

import {setPlayers} from "../../redux/players/players.actions"

export class PlayersInfo extends Component {

    state = {
        isLoading: true,
        playersList: [],
        itemsPerPage: 10,
        pageNumber: 1
    }

    // componentDidMount(){
    //     console.log("componentDidMount called")
    //     fetchPlayersData()
    //         .then((result) => {
    //             console.log(result)

    //             this.props.setPlayers(result.data.map((player) => ({name: player.Name, price: player.Price, bet: player.Bet, image:player['Profile Image'], level: 0, wins: 0, losts: 0, selected: false})))
                
    //             this.setState({
    //                 isLoading: false,
    //             })
    //         })
    //         .catch((err) => {
    //             console.error("Error while fetching players data", err.message)
    //         })

    // }

    onPageChange = (pageNumberInfo) => {
        this.setState({pageNumber: pageNumberInfo.selected+1})
    }


    render() {

        const {pageNumber, itemsPerPage} = this.state;
        const playersSlice = this.props.playersList.slice(itemsPerPage*(pageNumber-1),itemsPerPage*pageNumber);
        return (
            <div className="players-info">
                <h3 className="text-center mt-2">Select Players to enable a table</h3>
                <p className="text-center">You must select 9 players to start the table</p>
                <div className="players-info-arena">
                    <div className="left-side-pane">
                        <SelectedPlayersSidePane />
                    </div>
                    <div className="right-side-pane">
                        <PlayersList playersList={playersSlice} />
                        <Pagination pageCount={this.props.playersList.length/itemsPerPage} pageRangeDisplayed={3} marginPagesDisplayed={3} onPageChange={this.onPageChange} />
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        playersList: state.players.playersList
    }
}



export default connect(mapStateToProps, null)(PlayersInfo)
