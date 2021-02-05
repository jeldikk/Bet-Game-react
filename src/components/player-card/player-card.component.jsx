import React from 'react'
import {connect} from "react-redux"
import {Image} from 'react-bootstrap'

import {selectPlayer, unselectPlayer} from "../../redux/players/players.actions"

import "./player-card.styles.scss"

const PlayerCard = (props) => {
    // const [selected, setSelected] = useState(false);
    // console.log(player)
    const {name, level, image, bet, wins, losts, price, selected} = props.player

    const handlePlayerCardClick = () => {
        console.log(props.player)
        selected ? props.unselectPlayer(props.player): props.selectPlayer(props.player)
    }
    return (
        <tr className='player-card' onClick={() => handlePlayerCardClick()}>
            <td className={selected ? 'selected' : null}>{name}</td>
            <td>{level}</td>
            <td className="thumbnail-image"><Image rounded src={image} /></td>
            <td>{bet}</td>
            <td>{wins}</td>
            <td>{losts}</td>
            <td>{price}</td>
        </tr>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectPlayer: (player) => dispatch(selectPlayer(player)),
        unselectPlayer: (player) => dispatch(unselectPlayer(player))
    }
}

export default connect(null, mapDispatchToProps)(PlayerCard)
