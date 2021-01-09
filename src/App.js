// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch, Route} from 'react-router-dom'

import Header from "./components/header/header.component"
import Footer from "./components/footer/footer.component"

import PlayersInfo from "./pages/players-info/players-info.page"
import Table from "./pages/table/table.page"

function App() {
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

export default App;
