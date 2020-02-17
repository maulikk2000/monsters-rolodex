import React from "react";
import { IMonster } from "./IMonster";

interface ICardListItemProps {
  //name: string;
  monster: IMonster;
}

const CardListItem: React.FC<ICardListItemProps> = ({ monster }) => {
  return <h1 key={monster.id}>{monster.name}</h1>;
};

export default CardListItem;
