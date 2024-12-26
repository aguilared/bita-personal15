import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import Link from "next/link";
import Switcher from "@/components/Switcher";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "../theme";
//import { GlobalProvider } from "@/context/GlobalState";
import { EventsProvider } from "@/context/EventState";
import * as Menubar from "@radix-ui/react-menubar";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

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
    <html lang="en" className="dark">
      <body className={font.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <EventsProvider>
            <ThemeProvider theme={theme}>
              <div className="sm:p-3 md:py-3 lg:px-3 py-3 px-4 bg-white dark:bg-black">
                <div className="grid grid-cols-3 gap-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center flex-shrink-0 mr-6  text-gray-900 dark:text-white">
                      <Image
                        src={"/static/images/logo.jpg"}
                        width={70}
                        height={50}
                        alt=""
                        style={{ objectFit: "cover" }}
                      />
                      <span className="sm:inline-block font-semibold text-xl tracking-tight px-4 ">
                        Bitacora Personal Aguila
                      </span>
                    </div>
                  </div>
                  <Menubar.Root className="flex text-gray-900 dark:text-white p-[3px]">
                    <Menubar.Menu>
                      <Menubar.Trigger className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[16px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                        Admin
                      </Menubar.Trigger>
                      <Menubar.Portal>
                        <Menubar.Content
                          className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                          align="start"
                          sideOffset={5}
                          alignOffset={-3}
                        >
                          <Menubar.Item className="group text-[16px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                            <Link href="/admin/">Bitacoras</Link>
                          </Menubar.Item>
                          <Menubar.Separator className="h-[1px] bg-violet6 m-[5px]" />
                          <Menubar.Item className="group text-[16px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                            <Link href="/admin/tipo_events/">TypeEvents</Link>
                          </Menubar.Item>
                          <Menubar.Separator className="h-[1px] bg-violet6 m-[5px]" />
                          <Menubar.Item className="group text-[16px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                            <Link href="/adminAnimals/">AdminAnimals</Link>
                          </Menubar.Item>
                        </Menubar.Content>
                      </Menubar.Portal>
                    </Menubar.Menu>

                    <Menubar.Menu>
                      <Menubar.Trigger className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[16px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                        View
                      </Menubar.Trigger>

                      <Menubar.Portal>
                        <Menubar.Content
                          className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                          align="start"
                          sideOffset={5}
                          alignOffset={-14}
                        >
                          <Menubar.Separator className="h-[1px] bg-violet6 m-[5px]" />
                          <Menubar.Sub>
                            <Menubar.SubTrigger className="group text-[16px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                              BitaEvents
                              <div className="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                <ChevronRightIcon />
                              </div>
                            </Menubar.SubTrigger>

                            <Menubar.Portal>
                              <Menubar.SubContent
                                className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                                alignOffset={-5}
                              >
                                <Menubar.Separator className="h-[1px] bg-violet6 m-[5px]" />
                                <Menubar.Item className="text-[16px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                  <Link href="/bita_events/">AutoLoad</Link>
                                </Menubar.Item>
                                <Menubar.Item className="text-[16px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                  <Link href="/bitaEventPage/">Paginate</Link>
                                </Menubar.Item>
                              </Menubar.SubContent>
                            </Menubar.Portal>
                          </Menubar.Sub>
                          <Menubar.Separator className="h-[1px] bg-violet6 m-[5px]" />

                          <Menubar.Sub>
                            <Menubar.SubTrigger className="group text-[16px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                              Gonzalera
                              <div className="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                <ChevronRightIcon />
                              </div>
                            </Menubar.SubTrigger>

                            <Menubar.Portal>
                              <Menubar.SubContent
                                className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                                alignOffset={-5}
                              >
                                <Menubar.Separator className="h-[1px] bg-violet6 m-[5px]" />
                                <Menubar.Item className="text-[16px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                  <Link href="/animals/animalscard/">
                                    Listado
                                  </Link>
                                </Menubar.Item>

                                <Menubar.Item className="text-[16px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                  <Link href="/animals/animalsOwners/">
                                    SearchOwner
                                  </Link>
                                </Menubar.Item>
                              </Menubar.SubContent>
                            </Menubar.Portal>
                          </Menubar.Sub>
                        </Menubar.Content>
                      </Menubar.Portal>
                    </Menubar.Menu>

                    <Menubar.Menu>
                      <Menubar.Trigger className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[16px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                        Consultas
                      </Menubar.Trigger>

                      <Menubar.Portal>
                        <Menubar.Content
                          className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                          align="start"
                          sideOffset={5}
                          alignOffset={-14}
                        >
                          <Menubar.Separator className="h-[1px] bg-violet6 m-[5px]" />
                          <Menubar.Sub>
                            <Menubar.SubTrigger className="group text-[16px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                              BitaEvents
                              <div className="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                <ChevronRightIcon />
                              </div>
                            </Menubar.SubTrigger>

                            <Menubar.Portal>
                              <Menubar.SubContent
                                className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                                alignOffset={-5}
                              >
                                <Menubar.Separator className="h-[1px] bg-violet6 m-[5px]" />
                                <Menubar.Item className="text-[16px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                  <Link href="/bitaEventWordEvent/">
                                    DescriWord
                                  </Link>
                                </Menubar.Item>
                                <Menubar.Item className="text-[16px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                  <Link href="/bitaEventPageType/">
                                    TypeEvent
                                  </Link>
                                </Menubar.Item>
                                <Menubar.Item className="text-[16px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                  <Link href="/bitaEventTypeEven/">
                                    TypeEventEvent
                                  </Link>
                                </Menubar.Item>
                              </Menubar.SubContent>
                            </Menubar.Portal>
                          </Menubar.Sub>
                          <Menubar.Separator className="h-[1px] bg-violet6 m-[5px]" />

                          <Menubar.Sub>
                            <Menubar.SubTrigger className="group text-[16px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                              Gonzalera
                              <div className="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                <ChevronRightIcon />
                              </div>
                            </Menubar.SubTrigger>

                            <Menubar.Portal>
                              <Menubar.SubContent
                                className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                                alignOffset={-5}
                              >
                                <Menubar.Separator className="h-[1px] bg-violet6 m-[5px]" />
                                <Menubar.Item className="text-[16px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                  <Link href="/animals/animalscard/">
                                    Listado
                                  </Link>
                                </Menubar.Item>

                                <Menubar.Item className="text-[16px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]::to-violet10 data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                  <Link href="/animals/animalsOwners/">
                                    SearchOwner
                                  </Link>
                                </Menubar.Item>
                              </Menubar.SubContent>
                            </Menubar.Portal>
                          </Menubar.Sub>
                        </Menubar.Content>
                      </Menubar.Portal>
                    </Menubar.Menu>
                  </Menubar.Root>
                  <div className="flex justify-end">
                    <Switcher />
                  </div>
                </div>
              </div>

              <div className="sm:p-3 md:py-3 lg:px-3 py-3 px-4 bg-white dark:bg-black divide-y">
                <header>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="flex items-center flex-shrink-0 mr-6  text-gray-900 dark:text-white">
                      <Image
                        src={"/static/images/logo3.jpg"}
                        width={70}
                        height={50}
                        alt=""
                        style={{ objectFit: "cover" }}
                      />
                      <span className="sm:inline-block font-semibold text-xl tracking-tight px-4 ">
                        Bitacora Personal Aguila
                      </span>
                    </div>
                    <nav className="text-base font-medium space-x-6 text-gray-900 dark:text-white">
                      <Link
                        className="font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50  md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                        href="/bita_events/"
                      >
                        Home
                      </Link>
                      <Link href="/admin/">Admin</Link>
                      <Link href="/admin/tipo_events/">AdmTipoEvents</Link>
                      <Link href="/bitaEventPage/">Paginate</Link>
                      <Link href="/bitaEventWordEvent/">PaginateWord</Link>
                      <Link href="/bitaEventPageType/">PagiType</Link>
                      <Link href="/bitaEventTypeEven/">PagiTypeEvent</Link>
                      <Link href="/bitaEvent/">InfiBitaEvents</Link>
                      <Link href="/adminAnimals/">AdminAnimals</Link>
                    </nav>
                  </div>
                </header>
                <main>{children}</main>
              </div>

              <Footer />
            </ThemeProvider>
          </EventsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
