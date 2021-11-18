import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const FriendsDetails = () => {
    const {fndId} = useParams();
    const [friend, setFriend] = useState({});
  useEffect(() => {
     fetch(`https://jsonplaceholder.typicode.com/users/${fndId}`)
    .then(response => response.json())
    .then(data => setFriend(data))
  }, []);
  debugger;
    return (
        <div>
            <p>friend details No-{fndId}</p>
            <h1>Name: {friend.name}</h1>
            <h3>Nickname: {friend.username} </h3>
            <p>Email: {friend.email} </p>
            <p >Website: {friend.website}</p>
            <p>Phone: {friend.phone}</p>
            <p>Address: </p>

        </div>
    );
};

export default FriendsDetails;