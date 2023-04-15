import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "pretendard/dist/web/variable/pretendardvariable.css";
import RootLayout from "../components/layout/RootLayout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
