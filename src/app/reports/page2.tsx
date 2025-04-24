"use client";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ComponentToPrint = () => {
  return (
    <div style={{ padding: "20px", border: "1px solid #000" }}>
      <h1 style={{ color: "blue" }}>Hello, Print!</h1>
      <p>This is a printable component.</p>
    </div>
  );
};

const Example = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: () => componentRef.current,
  });

  return (
    <div
      className="example-container"
      style={{ padding: "20px", fontFamily: "sans-serif" }}
    >
      <h1 className="text-slate-600">Print Example</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handlePrint()}
      >
        Print this component
      </button>
      <div ref={componentRef}>
        <ComponentToPrint />
      </div>
      <p style={{ marginTop: "20px" }}>
        This is additional content below the print button.
      </p>
    </div>
  );
};

export default Example;
