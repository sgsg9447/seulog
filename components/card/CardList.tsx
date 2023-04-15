import { ParsedDatabseItemType } from "@/utils/parseDatabaseItems";
import React from "react";
import CardItem from "./CardItem";

interface CardListProps {
  cardItems: ParsedDatabseItemType[];
}

function CardList({ cardItems }: CardListProps) {
  return (
    <ul className="flex flex-col gap-8 ">
      {cardItems?.map((item) => {
        return <CardItem cardItem={item} />;
      })}
    </ul>
  );
}

export default CardList;
