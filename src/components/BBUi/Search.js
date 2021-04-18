import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");
 const onChange = (query) => {
     setText(query)
     getQuery(query)
 }
  return (
    <section style={{ marginBottom: '30px' }}>
      <form>
        <input
          type="text"
          placeholder="Search Characters..."
          className="form-control"
          autoFocus
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
