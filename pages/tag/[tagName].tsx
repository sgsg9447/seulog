import { getDatabaseItems } from "@/cms/notionClient";
import TagHeroSection from "@/components/tags/TagHeroSection";
import { getAllTags } from "@/utils/getAllTags";
import {
  parseDatabaseItems,
  ParsedDatabseItemType,
} from "@/utils/parseDatabaseItems";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";

interface TagPageProps {
  databaseItems: ParsedDatabseItemType[];
  tagName: string;
}

const TagPage = ({ databaseItems, tagName }: TagPageProps) => {
  console.log("databaseItems", databaseItems);
  return <TagHeroSection title={`#${tagName}`} />;
};

export default TagPage;

interface TagePageParams extends ParsedUrlQuery {
  tagName: string;
}

export const getStaticProps: GetStaticProps<
  TagPageProps,
  TagePageParams
> = async ({ params }) => {
  const { tagName } = params!;
  const pascalTagName = tagName[0].toUpperCase() + tagName.slice(1);
  if (!process.env.DATABSE_ID) throw new Error("databaseId is not defined!!");
  const databaseItems = await getDatabaseItems(process.env.DATABSE_ID, {
    filter: {
      tagName: pascalTagName,
    },
  });

  const parsedDatabaseItems = parseDatabaseItems(databaseItems);

  return {
    props: {
      databaseItems: parsedDatabaseItems,
      tagName: pascalTagName,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  if (!process.env.DATABSE_ID) throw new Error("databaseId is not defined!!");
  const databaseItems = await getDatabaseItems(process.env.DATABSE_ID);

  const tags = getAllTags(databaseItems);

  const paths = tags.map(({ name: tagName }) => ({
    params: {
      tagName: tagName.toLowerCase(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
