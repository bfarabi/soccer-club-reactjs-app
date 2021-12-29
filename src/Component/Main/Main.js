import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Club from "./../Club/Club";
import "./Main.css";

const Main = () => {
  const [clubs, setClubs] = useState([]);
  const shortClub = clubs.slice(1, 10);

  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/2/all_leagues.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setClubs(data.leagues);
        // console.log(data.leagues);
      });
  }, []);

  return (
    <>
      <div className="header-part">
        <div className="header-logo">
          <h1 className="header-name">Soccer league</h1>
        </div>
      </div>
      <div>
        {shortClub.map((club) => (
          <Club key={club.idLeague} club={club}></Club>
        ))}
      </div>
    </>
  );
};

export default Main;
