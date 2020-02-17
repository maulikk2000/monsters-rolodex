import React from "react";
import "./card-list.styles.css";
import { IMonster } from "./IMonster";
import CardListItem from "./card-list-item.component";

interface ICardListProps {
  //name: string;
  monsters: Array<IMonster>;
}

const CardList: React.FunctionComponent<ICardListProps> = ({ monsters }) => {
  // return <div className="card-list">{name}</div>;
  return (
    <div className="card-list">
      {monsters.map(monster => (
        <CardListItem monster={monster}></CardListItem>
      ))}
    </div>
  );
};

export default CardList;
