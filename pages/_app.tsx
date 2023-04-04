import type { AppProps } from "next/app";
import RootLayout from "../components/layout/RootLayout";
import "@/styles/globals.css";
import "pretendard/dist/web/variable/pretendardvariable.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
