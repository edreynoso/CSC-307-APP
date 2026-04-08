import React from "react";
import Table from "./Table";
import { useState } from "react";


const [characters, setCharacters] = useState([
    {
        name: "Charlie",
        job: "Janitor"
    },
    {
        name:"Mac",
        job: "Bouncer"
    },
    {
        name:"Dee",
        job: "Aspiring actress"
    },
    {
        name:"Dennis",
        job: "Bartender"
    }
]);

function removeOneCharacter(index) {
  const updated = characters.filter((index, i) => {
    return index !== i
  });

  setCharacters(updated);
}

export default function MyApp(){
  return (
    <div className="container">
      <Table characterData = {characters} removeCharacter={removeOneCharacte}/>
    </div>
  );
}