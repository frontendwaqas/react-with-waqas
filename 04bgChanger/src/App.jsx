import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen  duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex inset-x-0 flex-wrap justify-center bottom-12  ">
        <div className="flex rounded-3xl justify-center flex-wrap gap-3 bg-white px-3 py-2 shadow-lg">
          <button
            onClick={() => setColor("red")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("blue")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("Lavender")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => setColor("Crimson")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Crimson" }}
          >
            Crimson
          </button>
          <button
            onClick={() => setColor("Turquoise")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Turquoise" }}
          >
            Turquoise
          </button>
          <button
            onClick={() => setColor("Coral")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Coral" }}
          >
            Coral
          </button>
          <button
            onClick={() => setColor("Goldenrod")}
            className="px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Goldenrod" }}
          >
            Goldenrod
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
