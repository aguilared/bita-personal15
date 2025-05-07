"use client";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Heading from "@/components/Heading";
import Animals from "@/components/Animals/animals";

// Your main component
const MyPageWithHook = () => {
  // 1. Create the ref
  const componentRef = useRef(null);

  // 3. Configure the hook, passing the ref's current value via the content option
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "My-Document", // Optional
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
      <button onClick={handlePrint}>Print Section using Hooks</button>
      <div
        ref={componentRef}
        style={{ padding: "20px", border: "1px dashed blue" }}
      >
        <Heading
          title="Gonzalera Ranch Inventario de Animales"
          subtitle="Owners: Angel, Arquimedes, Jose Antonio, Petrica, Yoel, Milagros"
        />

        <Animals />
      </div>

      <hr />

      {/* Print Trigger Button */}
      <button onClick={handlePrint}>Print Section using Hookss</button>

      {/* Other page content */}
      <p>This part of the page will not be printed.</p>
    </div>
  );
};

export default MyPageWithHook;
