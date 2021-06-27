import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Competitions from "./containers/Competitions/Competitions";
import Navigation from "./components/Navigation";
import Standings from "./containers/Standings/Standings";
import Team from "./containers/Team/Team";
import Squad from "./containers/Squad/Squad";
import Fixtures from "./containers/Fixtures/Fixtures";
import TopScorers from "./containers/TopScorers/TopScorers";





function App() {
  return (
    <Router>
      <div>
        <Container maxWidth="lg">
          <Navigation/>
          <Switch>
            <Route exact path="/fixtures/:competitionId" component={Fixtures}/>
            <Route exact path="/topScorers/:competitionId" component={TopScorers}/>
            <Route exact path="/team/:teamId" component={Team}/>
            <Route exact path="/standings/:competitionId" component={Standings}/>
            <Route exact path="/squad/:teamId" component={Squad}/>
            <Route exact path="/" component={Competitions}/>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;