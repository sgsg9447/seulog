import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";

export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabaseItems = async (databaseId: string) => {
  const response = await notionClient.databases.query({
    database_id: databaseId,
    filter: {
      property: "공개",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "작성일",
        direction: "descending",
      },
    ],
  });
  return response.results;
};

export const unOfficialNotionClient = new NotionAPI();

export const getPageContent = async (pageId: string) => {
  const response = await unOfficialNotionClient.getPage(pageId);
  return response;
};
