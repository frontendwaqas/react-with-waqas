import { useState } from "react";

function App() {
  const [value, setValue] = useState(1);
  function addCounter() {
    if (value >= 0) {
      setValue((prev) => prev + 1);
      
    } else {
      alert("Somthing Want Wrong!");
      setValue(1);
    }
  }

  function removeCounter() {
    if (value >= 0) {
      setValue((prev) => prev - 1);
    } else {
      alert("Somthing Want Wrong!");
      setValue(1);
    }
  }

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: "auto",
          gap: "3px",
        }}
      >
        <h1>Hello Rai!</h1>
        <h1>Counter Value : {value}</h1>
        <div className="">
          <button
            onClick={addCounter}
            style={{
              backgroundColor: "#4CAF50" /* Green */,
              border: "none",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              margin: "4px 2px",
              cursor: "pointer",
              borderRadius: "12px",
              transitionDuration: "0.4s",
            }}
          >
            ADD
          </button>
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              border: "2px solid #4CAF50",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              margin: "4px 2px",
              cursor: "pointer",
              borderRadius: "12px",
              transitionDuration: "0.4s",
            }}
            onClick={removeCounter}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
