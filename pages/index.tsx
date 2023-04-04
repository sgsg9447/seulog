import { getDatabaseItems } from "@/cms/notionClient";
import { GetStaticProps } from "next";
import React from "react";

function Home() {
  return <div>Home</div>;
}

export default Home;

export const getStaticProps : GetStaticProps = async () =>{
 if(!process.env.DATABSE_ID) throw new Error("databaseId is not defined!!")
  const databaseItems = await getDatabaseItems(process.env.DATABSE_ID)
  console.log("databaseItems :>> ", databaseItems)
  return {
    props: {}
  }
}