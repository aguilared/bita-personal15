"use client";

import Link from "next/link";
import Image from "next/image";
import * as Menubar from "@radix-ui/react-menubar";
import { CaretDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Switcher from "@/components/Switcher";

interface HeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

// ... (imports) ...

const Header: React.FC<HeaderProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
                  {/* --- BARRA SUPERIOR: Logo, Menubar y Switcher --- */}     {" "}
      {/* py-0.5 para mínimo alto. px-0 en el contenedor del fondo. */}     {" "}
      <div className="rounded py-0.5 px-0 bg-gray-200 dark:bg-black">
                       {" "}
        {/* AJUSTE CLAVE: Usamos Grid para forzar la posición y px-4 para alineación izquierda */}
               {" "}
        <div className="grid grid-cols-12 items-center gap-2 px-4">
                             {" "}
          {/* Columna 1: Logo y Título principal (ocupa 4 de 12 columnas) */}   
               {" "}
          <div className="col-span-4 flex items-center flex-shrink-0 text-gray-900 dark:text-white justify-start">
                       {" "}
            <Image // Tamaño de imagen ultra-reducido
              src={"/static/images/logo.jpg"}
              width={35}
              height={20}
              alt=""
              style={{ objectFit: "cover" }}
            />
                        {/* Título más pequeño (text-sm) y con px-2 */}         
             {" "}
            <span className="hidden sm:inline-block font-semibold text-sm tracking-tight px-2">
                            Bitacora Personal Aguila            {" "}
            </span>
                     {" "}
          </div>
                             {" "}
          {/* Columna 2: Menubar principal (ocupa 5 de 12 columnas) */}         {" "}
          <div className="col-span-5 flex justify-start">
                       {" "}
            <Menubar.Root className="flex text-gray-900 dark:text-white p-0 flex-shrink-0">
                                          {/* === Admin Menu === */}           
               {" "}
              <Menubar.Menu>
                               {" "}
                {/* Trigger con py-0.5 y px-1 para mínimo padding, text-[13px] */}
                               {" "}
                <Menubar.Trigger className="py-0.5 px-1 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                                    Admin                  {" "}
                  <CaretDownIcon className="CaretDown" aria-hidden />           
                     {" "}
                </Menubar.Trigger>
                                {/* ... Contenido del menú ... */}             {" "}
              </Menubar.Menu>
                            {/* === Views Menu === */}             {" "}
              <Menubar.Menu>
                               {" "}
                <Menubar.Trigger className="py-0.5 px-1 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                                    Views                  {" "}
                  <CaretDownIcon className="CaretDown" aria-hidden />           
                     {" "}
                </Menubar.Trigger>
                                {/* ... Contenido del menú ... */}             {" "}
              </Menubar.Menu>
                                          {/* === Consultas Menu === */}       
                   {" "}
              <Menubar.Menu>
                               {" "}
                <Menubar.Trigger className="py-0.5 px-1 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                                    Consultas                  {" "}
                  <CaretDownIcon className="CaretDown" aria-hidden />           
                     {" "}
                </Menubar.Trigger>
                                {/* ... Contenido del menú ... */}             {" "}
              </Menubar.Menu>
                         {" "}
            </Menubar.Root>
                     {" "}
          </div>
                    {/* Columna 3: Switcher (ocupa 3 de 12 columnas) */}       
           {" "}
          <div className="col-span-3 flex justify-end">
                        <Switcher />         {" "}
          </div>
                 {" "}
        </div>
             {" "}
      </div>
      {/* --- BARRA INFERIOR: Logo Secundario y Navegación Principal --- */}   
       {" "}
      {/* Se deja la estructura de la barra inferior con flex/compactación máxima */}
           {" "}
      <div className="py-0.5 px-0 bg-white dark:bg-black divide-y">
               {" "}
        <header>
                    {/* px-4 para alinear el contenido con el body. */}         {" "}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 px-4">
                                    {/* Columna 1: Logo y Título secundario */} 
                     {" "}
            <div className="flex items-center flex-shrink-0 text-gray-900 dark:text-white justify-center lg:justify-start">
                           {" "}
              <Image
                src={"/static/images/logo3.jpg"}
                width={35}
                height={20}
                alt=""
                style={{ objectFit: "cover" }}
              />
                           {" "}
              <span className="hidden sm:inline-block font-semibold text-sm tracking-tight px-2">
                                Bitacora Personal Aguila2              {" "}
              </span>
                         {" "}
            </div>
                                   {" "}
            {/* Columna 2: Navegación Principal (Ultra-compacta) */}           {" "}
            <nav className="text-xs font-medium flex flex-wrap justify-center lg:justify-end gap-x-1 gap-y-0.5 text-gray-900 dark:text-white">
                           {" "}
              <Link className="font-medium px-1 py-0.5" href="/bita_events/">
                                Home              {" "}
              </Link>
                           {" "}
              <Link className="px-1 py-0.5" href="/admin/">
                Admin
              </Link>
                           {" "}
              <Link className="px-1 py-0.5" href="/admin/tipo_events/">
                AdmTipoEvents
              </Link>
                           {" "}
              <Link className="px-1 py-0.5" href="/bitaEventWordEvent/">
                PaginateWord
              </Link>
                           {" "}
              <Link className="px-1 py-0.5" href="/bitaEventPageType/">
                PagiType
              </Link>
                           {" "}
              <Link className="px-1 py-0.5" href="/bitaEventTypeEven/">
                PagiTypeEvent
              </Link>
                           {" "}
              <Link className="px-1 py-0.5" href="/bitaEvent/">
                InfiBitaEvents
              </Link>
                           {" "}
              <Link className="px-1 py-0.5" href="/adminAnimals/">
                AdminAnimals
              </Link>
                         {" "}
            </nav>
                     {" "}
          </div>
                 {" "}
        </header>
             {" "}
      </div>
         {" "}
    </div>
  );
};

export default Header;
