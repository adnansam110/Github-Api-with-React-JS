import React from "react";
import spinner from './../../img/spinner.gif';
import CharacterItem from './CharacterItem';

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>
        <img src={spinner} style={{ marginTop: '60px' }}/>
    </h1>
  ) : (
    <section className="cards">
        {items.map((item)=>(
            <CharacterItem key={item.char_id} item={item}/>
        ))}
    </section>
  );
};

export default CharacterGrid;
