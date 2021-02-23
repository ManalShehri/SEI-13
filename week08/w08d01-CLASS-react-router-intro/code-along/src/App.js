import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Show from "./pages/Show";

function App() {
  return (
    <Router>
      <header>
        <Link to="/home">
          <h1>Audubon Society Home page</h1>
        </Link>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <h1>Landing page</h1>
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route path="/:name">
            <Show />
          </Route>

          <Route path="*">
            <h1>No match (404) page</h1>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
