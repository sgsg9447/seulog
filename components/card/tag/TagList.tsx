import { ParsedDatabseItemType } from "@/utils/parseDatabaseItems";
import React from "react";
import TagItem from "./TagItem";

interface TagListProps {
  tags: ParsedDatabseItemType["tags"];
}

const TagList = ({ tags }: TagListProps) => {
  return (
    <ul className="py-4 px-6 flex flex-row flex-wrap gap-2">
      {tags.map((tag) => (
        <TagItem key={tag.id} tagItem={tag} />
      ))}
    </ul>
  );
};

export default TagList;