// import logo from './logo.svg';
// import './App.css';
import {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch, Route} from 'react-router-dom'

import {connect} from 'react-redux'

import {fetchPlayersData} from "./axios/axios.util"
import Header from "./components/header/header.component"
import Footer from "./components/footer/footer.component"

import PlayersInfo from "./pages/players-info/players-info.page"
import Table from "./pages/table/table.page"

import {setPlayers} from "./redux/players/players.actions"


function App(props) {

  useEffect(()=>{

    fetchPlayersData()
        .then((result) => {
            console.log(result)
            props.setPlayers(result.data.map((player) => ({name: player.Name, price: player.Price, bet: player.Bet, image:player['Profile Image'], level: 0, wins: 0, losts: 0, selected: false})))

        })
        .catch((err) => {
            console.error("Error while fetching players data", err.message)
        })

  },[])
  
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={PlayersInfo} />
        <Route exact path='/table' component={Table} />
      </Switch>
      <Footer />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
      setPlayers: (playerslist) => dispatch(setPlayers(playerslist))
  }
}

export default connect(null, mapDispatchToProps)(App);
