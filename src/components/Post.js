import React from "react";

const Post = ({ posts, loading }) => {
  return(
    loading ? <h2>Loading...</h2> :
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item" style={{ color: 'black' }}>
            {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Post;
