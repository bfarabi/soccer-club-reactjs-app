import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friends = (props) => {
  const { name, email, website, phone, id } = props.friend;
  let navigate = useNavigate();

  const handleClick = (fndId) => {
    const url = `/friend/${fndId}`;
    navigate(url);
  };
  const friendStyle = {
    border: "1px solid grey",
    margin: "5px",
  };

  return (
    <div style={friendStyle}>
      <h1>Name: {name}</h1>
      <p>Email: {email} </p>

      <p>
        <Link to={`/friend/${id}`}>
          <button
            style={{
              background: "green",
              color: "white",
              cursor: "pointer",
            }}
          >Show details-{id}
          </button>
        </Link>
      </p>
      <button onClick={() => handleClick(id)}>click me</button>
    </div>
  );
};

export default Friends;
