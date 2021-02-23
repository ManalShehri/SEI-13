import gameOfThrones from './gameOfThrones'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from 'react'
import './App.css';
import Navigation from './components/Navigation'

import Families from './components/Families'
import ShowFamily from './components/ShowFamily'
import ShowMember from './components/ShowMember'

import NewFamily from './components/NewFamily'
import NewMember from './components/NewMember'

function App() {
  const [gotData, setGotData] = useState([])

  useEffect(() => {
    setGotData(gameOfThrones)
  }, [])

  return (
    <Router>
      <Navigation />
      <br/>
      <Switch>
        <Route path="/families/:family_id/members/new">
          <NewMember Families={gotData} setGotData={setGotData}/>
        </Route>
        <Route path="/families/:family_id/members/:member_id">
          <ShowMember Families={gotData} />
        </Route>
        <Route path="/families/new">
          <NewFamily Families={gotData} setGotData={setGotData} />
        </Route>
        <Route path="/families/:family_id">
          <ShowFamily Families={gotData} />
        </Route>
        <Route path="/families">
          <Families Families={gotData} />
        </Route>
        <Route path="/">
          <Redirect to='/families' />
        </Route>
        <Route path="*">
          <h1>404 page not found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
