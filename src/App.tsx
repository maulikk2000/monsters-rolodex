import React, {
  useEffect,
  useState,
  InputHTMLAttributes,
  ChangeEvent
} from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import { IMonster } from "./components/card-list/IMonster";

const App: React.FC = () => {
  const [monsters, setmonsters] = useState<IMonster[]>([]);
  const [searchField, setsearchField] = useState("");

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(m => setmonsters(m));

    return () => {
      //cleanup
    };
  }, [monsters]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("field", e.target.value);
    setsearchField(e.target.value);
  };

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <input
        type="search"
        placeholder="search monsters"
        onChange={handleChange}
      ></input>
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
};

export default App;
