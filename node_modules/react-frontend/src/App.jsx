import React from "react";
import Table from "./Table";
import { useState } from "react";
import Form from "./Form";

export default function MyApp(){
  const [characters, setCharacters] = useState([]);

  function removeOneCharacter(index) {
    const updated = characters.filter((index, i) => {
      return index !== i
    });

    setCharacters(updated);
  }

  function updateList(person){
    setCharacters([...characters], person);
  }

  return (
    <div className="container">
      <Table characterData = {characters} removeCharacter={removeOneCharacter}/>
      <Form handleSubmit={updateList}/>
    </div>
  );
}