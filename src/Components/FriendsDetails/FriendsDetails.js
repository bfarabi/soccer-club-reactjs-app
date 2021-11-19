import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const FriendsDetails = () => {
    const {fndId} = useParams();
    const [friend, setFriend] = useState({});
    let navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
  useEffect(() => {
     fetch(`https://jsonplaceholder.typicode.com/users/${fndId}`)
    .then(response => response.json())
    .then(data => setFriend(data))
  }, [fndId]);
  
        const singleFriendStyle = {
            border:'1px solid grey',
            margin:'10px',
            padding:'10px',
        }
    return (
        <div style={singleFriendStyle}>
            <p>Friend details No-{fndId}</p>
            <h1>Name: {friend.name}</h1>
            <h3>Nickname: {friend.username} </h3>
            <p>Email: {friend.email} </p>
            <p >Website: {friend.website}</p>
            <p>Phone: {friend.phone}</p>
            <button onClick={goBack} >Go Back</button>
            

        </div>
    );
};

export default FriendsDetails;