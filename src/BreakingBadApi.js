import React, { useState, useEffect } from "react";
import "./BBstyle.css";
import axios from "axios";
import Header from "./components/BBUi/Header";
import CharacterGrid from "./components/Characters/CharacterGrid";
import Search from "./components/BBUi/Search";

const BreakingBadApi = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      console.log(result)
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(query)=> setQuery(query)}/>
      <CharacterGrid items={items} isLoading={isLoading}/>
    </div> 
  );
};

export default BreakingBadApi;
