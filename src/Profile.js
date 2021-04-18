import React, { useState } from "react";
import DisplayTables from "./DisplayTables";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);
  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    // console.log(profileJson)

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    profileJson && setData(profileJson) && setRepositories(repoJson);
    // console.log("Data:", data," repo: ",repositories)
  };
  return (
    <>
      <div className="ui search">
        <div className="ui search">
          <div className="ui icon input">
            <input
              type="text"
              className="prompt"
              value={username}
              onChange={onChangeHandler}
              placeholder="Search User Here..."
            />
            <i className="search icon"></i>
          </div>
          <button
            class="ui facebook button"
            type="submit"
            onClick={onSubmitHandler}
          >
            <i class="github icon"></i>
            Search
          </button>
        </div>
      </div>
      <DisplayTables data={data} repositories={repositories}/>
    </>
  );
};

export default Profile;
