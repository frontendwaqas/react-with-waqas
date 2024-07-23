import "./App.css";
import Card from "./Compunents/Card";

function App() {
  return (
    <>
      <h1 className="bg-black text-white">Tailwind Test</h1>
      <Card userName="waqaswithcode" btnText="Click Me" />
      <Card userName="codewithwaqas" btnText="Click Me" />
    </>
  );
}

export default App;
