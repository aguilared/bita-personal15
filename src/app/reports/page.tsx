"use client";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Heading from "@/components/Heading";
// Your main component
const MyPageWithHook = () => {
  // 1. Create the ref
  const componentRef = useRef(null);

  // 3. Configure the hook, passing the ref's current value via the content option
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "My-Document", // Optional
  });

  return (
    <div>
      {/* The actual content to print */}
      {/* 2. Attach the ref here */}
      <div
        ref={componentRef}
        style={{ padding: "20px", border: "1px dashed blue" }}
      >
        <Heading title="Query List Animalsss" subtitle="Vacas" />

        <h1>Printable Section</h1>
        <p>This content will be printed when using the hook.</p>
      </div>

      <hr />

      {/* Print Trigger Button */}
      <button onClick={handlePrint}>Print Section using Hook</button>

      {/* Other page content */}
      <p>This part of the page will not be printed.</p>
    </div>
  );
};

export default MyPageWithHook;
