import React from "react";
import "./styles/App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import GroupMemberForm from "./components/GroupMemberForm";
import FreeCanvas from "./components/FreeCanvas"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/group-view" component={GroupMemberForm} />
          <Route path="/free-canvas" component={FreeCanvas} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
