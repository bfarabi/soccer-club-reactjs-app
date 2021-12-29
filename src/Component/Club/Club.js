import React from 'react';

import './Club.css';
import { useNavigate } from 'react-router-dom';

const Club = (props) => {
const {strLeague,strSport,idLeague } = props.club;
let navigate = useNavigate()
const goClubDetail = (clubId) => {
    navigate(`/club/${clubId}`);
}
    
    return (

        <div className='teamStyle'>
           <h2> {strLeague}</h2>
           <p>Sports type: {strSport}</p>
           <button className='btn btn-primary'
           onClick={()=> goClubDetail(idLeague)}
           > Explore </button>
           
        </div>
    );
};

export default Club;