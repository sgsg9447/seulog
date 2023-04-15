import { getDatabaseItems } from "@/cms/notionClient";
import CardSection from "@/components/intro/CardSection";
import { HeroSection } from "@/components/intro/HeroSection";
import {
  parseDatabaseItems,
  ParsedDatabseItemType
} from "@/utils/parseDatabaseItems";
import { GetStaticProps } from "next";

interface HomeProps {
  databaseItems: ParsedDatabseItemType[];
}

function Home({ databaseItems }: HomeProps) {
  console.log("databaseItems : >>", databaseItems);
  return (
    <div>
      <HeroSection />
      <CardSection cardItems={databaseItems} />
    </div>
  );
}

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  if (!process.env.DATABSE_ID) throw new Error("databaseId is not defined!!");
  const databaseItems = await getDatabaseItems(process.env.DATABSE_ID);
  // console.log("databaseItems :>> ", databaseItems)
  const parsedDatabaseItems = parseDatabaseItems(databaseItems);
  // console.log("parsedDatabaseItems :>> ", parsedDatabaseItems);
  return {
    props: {
      databaseItems: parsedDatabaseItems,
    },
  };
};
