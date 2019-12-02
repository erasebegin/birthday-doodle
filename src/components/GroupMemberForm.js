//based on this tutorial https://itnext.io/building-a-dynamic-controlled-form-in-react-together-794a44ee552c
import React from "react";
import MemberInput from "./MemberInput";
import "../styles/GroupMemberForm.css";

class GroupMemberForm extends React.Component {
  state = {
    members: [{ name: "", dob: "" }],
    groupName: ""
  };
  handleChange = e => {
    if (["name", "dob"].includes(e.target.className)) {
      let members = [...this.state.members];
      members[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ members }, () => console.log(this.state.members,this.state.groupName));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  addMember = e => {
    this.setState(prevState => ({
      members: [...prevState.members, { name: "", dob: "" }]
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    let { groupName, members } = this.state;
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <label htmlFor="name" style={{ color: "white" }}>
          Group Name
        </label>
        <input type="text" name="groupName" id="groupName" value={groupName} />
        <MemberInput members={members} />
        <button onClick={this.addMember}>Add new member</button>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default GroupMemberForm;
