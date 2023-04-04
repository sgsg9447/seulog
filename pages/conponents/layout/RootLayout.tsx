import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer />
    </>
  );
}
