import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState([]);

  const getUserProfile = async () => {
    const res = await fetch(`https://api.github.com/users/${id}`);
    const profile = await res.json();
    setProfile(profile);
    console.log(profile);
  };
  useEffect(() => {
    getUserProfile();
  });
  if (profile === []) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Hello, Welcome to my profile </h1>
      <p>
        <b></b> to know more about me click on the links below
      </p>

      <a href={profile.html_url}>Visit my github profile </a>
      <div style={{ width: "800px", height: "auto", margin: "auto" }}>
        <img src={profile.avatar_url} alt={profile.login} />
      </div>
    </div>
  );
};

export default Profile;
