// 1. Indica que este componente debe ejecutarse en el cliente
"use client";

import React, { useRef, forwardRef } from "react";
// Importa el hook correctamente
import { useReactToPrint } from "react-to-print";

// --- 2. Componente que contendrá el contenido a imprimir (sin cambios) ---
const ContenidoImprimible = forwardRef((props, ref) => {
  const { titulo, parrafo } = props;
  return (
    <div
      ref={ref} // La ref se adjunta aquí
      style={{ padding: "30px", border: "1px solid #ccc", margin: "20px 0" }}
    >
      <h2>{titulo || "Título por Defecto"}</h2>
      <p>{parrafo || "Este es un párrafo de ejemplo para la impresión."}</p>
      <p>
        Fecha de impresión: {new Date().toLocaleDateString("es-VE")} - Hora:{" "}
        {new Date().toLocaleTimeString("es-VE")}
      </p>
      <table
        border="1"
        cellPadding="5"
        style={{ width: "100%", marginTop: "15px" }}
      >
        <thead>
          <tr>
            <th>Item</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ejemplo 1</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Ejemplo 2</td>
            <td>250</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
});
ContenidoImprimible.displayName = "ContenidoImprimible";

// --- 3. Componente de Página Principal (Corregido) ---
const PaginaDeImpresion = () => {
  const contenidoRef = useRef(null);
  console.log("contenidoRef", contenidoRef);
  const datosParaImprimir = {
    titulo: "Reporte de Ejemplo - Guayana",
    parrafo: "Este reporte demuestra el uso de react-to-print en Next.js.",
  };

  // --- 4. Llama al Hook en el nivel superior ---
  const handlePrint = useReactToPrint({
    // La propiedad se llama 'content' (no 'contentRef') para el hook
    content: () => contenidoRef.current, // Función que devuelve el nodo DOM
    documentTitle: `Reporte-${new Date().toISOString().slice(0, 10)}`,
    pageStyle: `
      @page {
        size: A4;
        margin: 20mm;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
          font-family: Arial, sans-serif;
        }
        h2 {
          color: navy;
          text-align: center;
        }
        table {
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
        }
        th {
          background-color: #f2f2f2;
        }
      }
    `,
    // Opcional: Callbacks si los necesitas
    // onBeforeGetContent: () => console.log('Preparando contenido...'),
    // onAfterPrint: () => console.log('Impresión finalizada o cancelada.'),
    // onPrintError: (error) => console.error('Error de impresión:', error),
  });

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Ejemplo de Impresión en Next.js (con Hook)</h1>
      <p>
        Haz clic en el botón para imprimir el contenido de la sección de abajo.
        Hoy es{" "}
        {new Date().toLocaleDateString("es-VE", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        .
      </p>

      {/* --- 5. Botón que usa la función devuelta por el hook --- */}
      <button
        onClick={handlePrint} // Llama a la función guardada en handlePrint
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        🖨️ Imprimir Reporte (Hook)
      </button>

      {/* --- 6. El contenido que será impreso (sin cambios) --- */}
      <ContenidoImprimible ref={contenidoRef} {...datosParaImprimir} />

      <hr />
      <p>Fin del ejemplo.</p>
    </div>
  );
};

export default PaginaDeImpresion;
