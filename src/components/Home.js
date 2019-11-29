import React from "react";
import "../styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Welcome to Birthday Doodle!</h1>
        <p>Please enter your group code below:</p>
        <form>
          <input type="text" placeholder="Group Code" className="form-input group-input" />
          <input type="text" placeholder="Password (optional)" className="form-input pass-input" />
        </form>
      </div>
    );
  }
}

export default Home;
