import React, { Component } from 'react'

import {connect} from 'react-redux'

import "./table.styles.scss"

import {selectSelectedPlayers} from "../../redux/players/players.selectors"

import TablePlayerCard from "../../components/table-player-card/table-player-card.component"

class Table extends Component {

    state = {
        randomNumber: null
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                randomNumber: Math.floor(Math.random()*10)
            })
        }, 500)
    }

    render() {
        // console.log(this.props.selectedPlayers);
        console.log(this.state.randomNumber)
        return (
            <div className="table-page">
                <div className="random-number">
                    {this.state.randomNumber}
                </div>
                {
                    this.state.randomNumber === null ?
                    null :
                    <div className="table-players">
                        {
                            this.props.selectedPlayers.map((player) => <TablePlayerCard player={player} key={player.name} randomNumber={this.state.randomNumber}/>)
                        }
                    </div>
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedPlayers: selectSelectedPlayers(state)
    }
}

export default connect(mapStateToProps,null)(Table)
