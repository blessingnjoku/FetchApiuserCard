import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Users() {
  const [person, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    const res = await fetch("https://api.github.com/users");
    const person = await res.json();
    setPersons(person);
    console.log(person);
  };
  useEffect(() => {
    getUser();
  }, []);
  if (person == []) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1> Online Users </h1>
      <p>Fetched from github </p>
      <div className="main-box">
        {person.map((val, key) => {
          return (
            <Link to={`/${val.id}`} key={key}>
              <div className="image-box">
                <img src={val.avatar_url} alt={val.login} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
