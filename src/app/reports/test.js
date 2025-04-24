import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

const ComponentToPrint = () => {
  return (
    <div>
      <h1>Hello, Print!</h1>
      <p>This is a printable component.</p>
    </div>
  );
};

const Example = () => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this component</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};

export default Example;
