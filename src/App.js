import React from "react";
import "./styles/App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import CreateGroup from "./components/CreateGroup";

class App extends React.Component {
  constructor() {
    super()
    this.state={nav:""}
    this.setNav = this.setNav.bind(this);
  }

  setNav(navInput) {
    const navArr = ["home","create"]
    this.setState({nav:navArr[navInput]})
  }

  render() {
    
  

    return (
      <div className="App">
        <Nav getNav={this.setNav}/>
        {this.state.nav === "create" ? <CreateGroup /> : <Home />}
      </div>
    );
  }
}

export default App;
