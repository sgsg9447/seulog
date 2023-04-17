import { getDatabaseItems } from "@/cms/notionClient";
import {
  MultiSelectPropertyItemObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export interface ParsedDatabseItemType {
  id: string;
  cover: string;
  icon: PageObjectResponse["icon"];
  tags: MultiSelectPropertyItemObjectResponse["multi_select"];
  published: string;
  description: string;
  title: string;
}

export const parseDatabaseItems = (
  items: Awaited<ReturnType<typeof getDatabaseItems>>
) => {
  const parsedItems = items.reduce<ParsedDatabseItemType[]>((acc, item) => {
    if (!("properties" in item)) return acc;
    const { id, icon, cover } = item;
    const { 태그, 공개, 설명, 생성일, 작성일, Name } = item.properties;

    const parsedCover =
      cover?.type === "file" ? cover.file.url : cover?.external.url ?? "";

    const published = (작성일.type === "date" ? 작성일.date?.start : "") ?? "";
    const description =
      (설명.type === "rich_text" ? 설명.rich_text[0]?.plain_text : "") ?? "";
    const title = Name.type === "title" ? Name.title[0]?.plain_text : "";

    const tags = 태그.type === "multi_select" ? 태그.multi_select : [];
    const parsedResult: ParsedDatabseItemType = {
      id,
      icon,
      cover: parsedCover,
      published,
      description,
      title,
      tags,
    };
    return [...acc, parsedResult];
  }, []);
  return parsedItems;
};
