import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Hearder";

import "./globals.css";
import Link from "next/link";
import Switcher from "@/components/Switcher";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "../theme";
//import { GlobalProvider } from "@/context/GlobalState";
import { EventsProvider } from "@/context/EventState";
import * as Menubar from "@radix-ui/react-menubar";
import { ChevronRightIcon, CaretDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { colourOptions } from "@/components/data";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bitacora Personal",
  description: "Bitacora Personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body
        className={font.className}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
