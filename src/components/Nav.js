import React from "react";
import "../styles/Nav.css";

class Nav extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(nav) {
        this.props.getNav(nav)
    }

  render() {
    return (<div className="nav">
            <ul>
                <li className="btn" onClick={() => this.handleClick(0)}>Home</li>
                <li className="btn" onClick={() => this.handleClick(1)}>Create group</li>
            </ul>
        </div>)
  }
}

export default Nav;
