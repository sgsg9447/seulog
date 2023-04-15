import { ParsedDatabseItemType } from "@/utils/parseDatabaseItems";
import React from "react";
import CardList from "../card/CardList";

interface CardSectionProps {
  cardItems: ParsedDatabseItemType[];
}

function CardSection({ cardItems }: CardSectionProps) {
  return (
    <section>
      <div className="max-w-5xl w-4/5 mx-auto flex flex-col gap-6 py-8">
        <h3 className="font-bold text-3xl ">Posts</h3>
        <CardList cardItems={cardItems} />
        {/* pagination */}
      </div>
    </section>
  );
}

export default CardSection;
