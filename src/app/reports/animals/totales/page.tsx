"use client";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Heading from "@/components/Heading";
import AnimalsTot from "@/components/Animals/AnimalsTot";

// Your main component
const MyPageWithHook = () => {
  // 1. Create the ref
  const componentRef = useRef(null);

  // 3. Configure the hook, passing the ref's current value via the content option
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Listado de Animales", // Optional
    onBeforePrint: async () => {
      console.log("Antes de obtener el contenido para imprimir...");
      // Aquí podrías poner lógica para esperar a que Animals cargue todo
      // O un simple (pero arriesgado) retardo:
      await new Promise((resolve) => setTimeout(resolve, 20000)); // Espera 1 segundo
    },
    onAfterPrint: () => {
      console.log("Impresión terminada.");
    },
  });

  return (
    <div>
      {/* The actual content to print */}
      {/* 2. Attach the ref here */}
      <button
        className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={handlePrint}
      >
        Print Data
      </button>
      <div
        ref={componentRef}
        style={{ padding: "20px", border: "1px dashed blue" }}
      >
        <Heading
          title="Gonzalera Ranch Inventario de Animales"
          subtitle="Owners: Angel, Arquimedes, Jose Antonio, Petrica, Yoel, Milagros"
        />

        <AnimalsTot />
      </div>

      <hr />
    </div>
  );
};

export default MyPageWithHook;
