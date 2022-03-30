import React, { useState, useEffect, useRef } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import "./styles/App.css";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  const getMonsters = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await res.json();
    return json;
  };

  useEffect(async () => {
    const monsters = await getMonsters();
    console.log(monsters);
    setMonsters(monsters);
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder="searchMonster" handleChange={handleChange} />
      <CardList cardList={filteredMonsters} />
    </div>
  );
}

export default App;
