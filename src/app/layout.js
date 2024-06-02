import { headers } from "next/headers";
import WagmiContextProvider from "../WagmiContext";
import { cookieToInitialState } from "wagmi";
import { config } from "../wagmi";

import "./globals.css";

export const metadata = {
  title: "Saviour",
  description: "Saviour",
  icon: "/logo2.png",
};

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html
      className="text-[10px] max-[1557px]:text-[8px] max-[375px]:text-[7px]  "
      lang="en"
    >
      <WagmiContextProvider initialState={initialState}>
        <body>{children}</body>
      </WagmiContextProvider>
    </html>
  );
}
