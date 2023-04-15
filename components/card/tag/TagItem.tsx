import { COLOR_TABLE } from "@/const/const";
import { ParsedDatabseItemType } from "@/utils/parseDatabaseItems";
import Link from "next/link";

interface TagItemProps {
  tagItem: ParsedDatabseItemType["tags"][number];
}

const TagItem = ({ tagItem }: TagItemProps) => {
  const { name, color } = tagItem;
  return (
    <li>
      <Link href={`tag/${name.toLowerCase()}`}>
        <a
          className="hover:underline px-2 py-1 rounded-full font-light"
          style={{ backgroundColor: COLOR_TABLE[color] }}
        >
          #{name}
        </a>
      </Link>
    </li>
  );
};

export default TagItem;
