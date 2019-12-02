import React from "react";

const MemberInput = props => {
  return props.members.map((val, idx) => {
    let memberId = `member-${idx}`,
      dobId = `dob-${idx}`;
    return (
      <div key={idx}>
        <label htmlFor={memberId} style={{ color: "white" }}>{`#${idx +
          1}`}</label>
        <input
          type="text"
          name={memberId}
          data-id={idx}
          id={memberId}
          value={props.members[idx].name}
          className="name"
        />
        <label htmlFor={dobId} style={{ color: "white" }}>
          DOB
        </label>
        <input
          type="date"
          name={dobId}
          data-id={idx}
          id={dobId}
          value={props.members[idx].dob}
          className="dob"
        />
      </div>
    );
  });
};
export default MemberInput;
