import React from "react";
import { IMonster } from "./IMonster";
import "./card.style.css";

interface ICardListItemProps {
  //name: string;
  monster: IMonster;
}

const CardListItem: React.FC<ICardListItemProps> = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      ></img>
      <h2 key={monster.id}>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

export default CardListItem;
