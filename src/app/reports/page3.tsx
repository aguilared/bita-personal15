// 1. Indica que este componente debe ejecutarse en el cliente
// Necesario para useRef, event handlers (onClick del botón implícito) y react-to-print
"use client";

import React, { useRef, forwardRef } from "react";
// Removed incorrect import of ReactToPrint
import { useReactToPrint } from "react-to-print";

// --- 2. Componente que contendrá el contenido a imprimir ---
// Usamos forwardRef para que pueda recibir una 'ref' desde el componente padre
const ContenidoImprimible = forwardRef((props, ref) => {
  // Los datos pueden venir de props o estar definidos aquí
  const { titulo, parrafo } = props;

  return (
    // Adjuntamos la ref al elemento raíz que queremos imprimir
    <div
      ref={ref}
      style={{ padding: "30px", border: "1px solid #ccc", margin: "20px 0" }}
    >
      <h2>{titulo || "Título por Defecto"}</h2>
      <p>{parrafo || "Este es un párrafo de ejemplo para la impresión."}</p>
      <p>
        Fecha de impresión: {new Date().toLocaleDateString("es-VE")} - Hora:{" "}
        {new Date().toLocaleTimeString("es-VE")}
      </p>
      {/* Puedes añadir tablas, imágenes, etc. aquí */}
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

// Añadir displayName mejora la depuración en React DevTools
ContenidoImprimible.displayName = "ContenidoImprimible";

// --- 3. Componente de Página Principal (Ejemplo) ---
// Este componente orquesta la impresión
const PaginaDeImpresion = () => {
  // Creamos una referencia. ReactToPrint la usará para encontrar el contenido.
  const contenidoRef = useRef(null); // Inicializar con null es buena práctica

  // Datos de ejemplo que pasaremos al componente imprimible
  const datosParaImprimir = {
    titulo: "Reporte de Ejemplo - Guayana",
    parrafo: "Este reporte demuestra el uso de react-to-print en Next.js.",
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Ejemplo de Impresión en Next.js</h1>
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

      {/* --- 4. El componente ReactToPrint --- */}
      <button
        onClick={useReactToPrint({
          contentRef: () => contenidoRef.current,
          documentTitle: `Reporte-${new Date().toISOString().slice(0, 10)}`,
          pageStyle: `
            @page {
              size: A4;
              margin: 20mm;
            }
            @media print {
              body {
                -webkit-print-color-adjust: exact; /* Mantiene colores en Chrome/Safari */
                color-adjust: exact; /* Estándar para mantener colores */
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
        })}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        🖨️ Imprimir Reporte
      </button>

      {/* --- 5. El contenido que será impreso --- */}
      {/* Renderizamos el componente y le pasamos la 'ref' */}
      {/* También pasamos los datos como props */}
      <ContenidoImprimible ref={contenidoRef} {...datosParaImprimir} />

      <hr />
      <p>Fin del ejemplo.</p>

      {/* Alternativa: Si NO quieres mostrar el componente en pantalla y solo usarlo para imprimir */}
      {/* <div style={{ display: 'none' }}>
           <ContenidoImprimible ref={contenidoRef} {...datosParaImprimir} />
      </div> */}
    </div>
  );
};

// Exportamos el componente de página
export default PaginaDeImpresion;
