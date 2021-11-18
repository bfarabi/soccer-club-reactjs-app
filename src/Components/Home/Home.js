import React from "react";
import Friends from "./../Friends/Friends";
import { useEffect, useState } from "react";

const Home = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div>
      <h2> Friends: {friends.length} </h2>
      {friends.map((friend) => (
        <Friends key={friend.id} friend={friend}></Friends>
      ))}
    </div>
  );
};

export default Home;
