import React from "react";
import "../styles/GroupMemberForm.css";

class GroupMemberForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      members: [{ name: "" }]
    };
  }

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleMemberNameChange = idx => evt => {
    const newMembers = this.state.members.map((member, sidx) => {
      if (idx !== sidx) return member;
      return { ...member, name: evt.target.value };
    });

    this.setState({ members: newMembers });
  };

  handleSubmit = evt => {
    const { name, members } = this.state;
    alert(`Incorporated: ${name} with ${members.length} shareholders`);
  };

  handleAddMember = () => {
    this.setState({
      members: this.state.members.concat([{ name: "" }])
    });
  };

  handleRemoveMember = idx => () => {
    this.setState({
      members: this.state.members.filter((s, sidx) => idx !== sidx)
    });
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <h1>Create Group</h1>
          <input
            type="text"
            placeholder="Group name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />

          {this.state.members.map((member, idx) => (
            <div className="member">
              <input
                type="text"
                placeholder={`Name #${idx + 1}`}
                value={member.name}
                onChange={this.handleMemberNameChange(idx)}
              />
              <button
                type="button"
                onClick={this.handleRemoveMember(idx)}
                className="small"
              >
                -
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={this.handleAddMember}
            className="small"
          >
            Add Member
          </button>
          <button>Create Group</button>
        </form>
      </div>
    );
  }
}

export default GroupMemberForm;
