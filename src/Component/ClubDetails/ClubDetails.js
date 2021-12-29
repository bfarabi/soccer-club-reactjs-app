import React from 'react';
import './ClubDetails.css';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

const ClubDetails = () => {
    const {clubId}=useParams();
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/lookupleague.php?id=${clubId}`)
       .then(response => response.json())
       .then(data => {
        console.log(data.leagues[0]);
        setTeam(data.leagues[0]);
       })
     }, [clubId]);
    return (
        <>
            <div className='banner'> <img src={team.strBanner} alt="" /> </div>
            <div >
            <div className='info-bg'>
                <div className="teamInfo">
                    <h4>{team.strLeague}</h4>
                    <p>Founded: {team.intFormedYear} </p>
                    <p>Country: {team.strCountry} </p>
                    <p>Sports type: {team.strSport} </p>
                    <p>Gender: {team.strGender} </p>
                </div>
                <div className="genderPhoto">
                    <img src={team.strFanart1} alt="" />
                </div>
            </div>
            </div>
            <div>
            <div className='info-text'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quaerat necessitatibus? Ipsum, et incidunt, unde repellendus cupiditate pariatur dignissimos exercitationem, minima sapiente impedit nihil libero vero quibusdam illo nesciunt. Aspernatur quaerat sint at officia quod cum. Facilis ut accusantium sapiente voluptas nisi exercitationem laborum explicabo nam, nemo voluptates, nobis magni quisquam placeat dicta totam molestias, suscipit temporibus. Reiciendis exercitationem quis sit possimus ea modi culpa sequi illum pariatur, deleniti ducimus saepe ipsa laboriosam dolore? Atque magnam accusantium ipsa aspernatur quibusdam totam, suscipit voluptate sed ullam, ratione quo, deserunt laudantium quisquam soluta nobis maxime et beatae ipsum asperiores dolorum vitae explicabo?
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas laudantium animi doloremque labore enim eveniet minus quaerat sit delectus iure, quos obcaecati consequatur harum? Quas nulla cupiditate ratione odio corrupti voluptatibus, expedita quae, dolorum temporibus voluptas minus ut, fuga sunt voluptate nobis. Pariatur mollitia saepe dolorem nam optio inventore fugit natus rerum magnam laudantium iure, eum esse ducimus repellendus officiis ipsa quae consequatur deleniti quidem, officia corporis ad. Nisi molestias iure corrupti dolor necessitatibus. Deserunt cum doloribus officia sit. Adipisci consequuntur tenetur sit architecto, laborum quod eveniet iusto ducimus sequi perferendis, quasi praesentium. Corporis deleniti iure ab expedita praesentium!
                </p>
            </div>
            </div>
            
        </>
    );
};

export default ClubDetails;