import React from "react";

const DisplayTables = ({ data, repositories }) => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Avatar</th>
          <th>Location</th>
          <th>Bio</th>
          <th>Repositories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>
            {!data.avatar_url ? (
              " "
            ) : (
              <img className="ui small circular image" src={data.avatar_url} />
            )}
          </td>
          <td>{data.location}</td>
          <td>{data.bio}</td>
          <td>
            {repositories.map((repo) => (
              <div className="ui relaxed divided list">
                <i className="large github middle aligned icon" />
                <div className="content">
                  {console.log(repo.html_url)}
                  <a
                    href={repo.owner.html_url}
                    className="header"
                    target="_blank"
                  ></a>
                </div>
              </div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DisplayTables;
