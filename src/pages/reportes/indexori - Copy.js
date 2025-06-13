// Asegúrate de que este componente se ejecute en el cliente
"use client";

import React, { useRef, forwardRef } from "react"; // Importa forwardRef
import ReactToPrint from "react-to-print";

// --- Componente que quieres imprimir ---
// Envuélvelo con forwardRef para que pueda recibir la ref
const ComponentToPrint = forwardRef((props, ref) => {
  // Recibe 'props' y 'ref'
  return (
    // Adjunta la ref al elemento raíz que deseas imprimir
    <div
      ref={ref}
      style={{ padding: "20px", border: "1px solid black", margin: "10px" }}
    >
      <h1>¡Hola, Impresión!</h1>
      <p>Este es un componente imprimible.</p>
      {/* Puedes añadir más contenido aquí */}
    </div>
  );
});

// Opcional: Añadir un displayName para facilitar la depuración
ComponentToPrint.displayName = "ComponentToPrint";

// --- Botón de impresión como componente separado ---
const PrintButton = () => (
  <button style={{ padding: "10px 15px", cursor: "pointer" }}>
    Imprimir este componente
  </button>
);

// --- Componente principal que contiene el botón de impresión ---
const Example = () => {
  // Crea la referencia que apuntará al DOM node de ComponentToPrint
  const componentRef = useRef(null); // Es buena práctica inicializar con null

  return (
    <>
      {/* Botón que dispara la impresión */}
      <ReactToPrint
        trigger={() => (
          <button style={{ padding: "10px 15px", cursor: "pointer" }}>
            Imprimir este componente
          </button>
        )}
        content={() => componentRef.current} // La función content debe devolver el nodo DOM actual
        documentTitle="Mi Documento Impreso" // Título opcional para el documento impreso
        pageStyle={`
          @page {
            size: auto;
            margin: 20mm;
          }
          @media print {
            body {
              -webkit-print-color-adjust: exact; /* Para mantener colores de fondo/texto en Chrome/Safari */
              color-adjust: exact; /* Estándar */
            }
            h1 {
              color: blue; /* Estilos específicos para impresión */
            }
          }
        `}
      />

      {/* El componente que se va a imprimir. */}
      {/* Pasamos la ref aquí. Gracias a forwardRef, ComponentToPrint puede recibirla. */}
      {/* Puedes mostrarlo en pantalla o esconderlo si solo lo necesitas para imprimir */}
      <div
        style={{
          marginTop: "20px",
          border: "1px dashed lightgray",
          padding: "10px",
        }}
      >
        <h3>Componente visible en pantalla (será el contenido a imprimir):</h3>
        <ComponentToPrint ref={componentRef} />
      </div>

      {/* Alternativa: Si NO quieres mostrar el componente en pantalla y solo usarlo para imprimir */}
      {/* <div style={{ display: 'none' }}>
           <ComponentToPrint ref={componentRef} />
      </div> */}
    </>
  );
};

export default Example;
