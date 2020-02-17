import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import { IMonster } from "./components/card-list/IMonster";

const App: React.FC = () => {
  const [monsters, setmonsters] = useState<IMonster[]>([]);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(m => setmonsters(m));

    return () => {
      //cleanup
    };
  }, [monsters]);
  return (
    <div className="">
      {/* {monsters.map(m => (
        <CardList name={m.name}></CardList>
      ))} */}
      <CardList monsters={monsters}></CardList>
    </div>
  );
};

export default App;
