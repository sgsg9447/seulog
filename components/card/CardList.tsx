import { ParsedDatabseItemType } from "@/utils/parseDatabaseItems";
import CardItem from "./CardItem";

interface CardListProps {
  cardItems: ParsedDatabseItemType[];
}

function CardList({ cardItems }: CardListProps) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cardItems?.map((item) => {
        return <CardItem cardItem={item} key={item.id} />;
      })}
    </ul>
  );
}

export default CardList;
