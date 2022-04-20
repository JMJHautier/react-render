import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Nested1 from "./Nested1";
import Nested2 from "./Nested2";

function App() {
  const [appState, setAppState] = useState("AppState");
  let nested1Props = "nested1Props";
  let nested2Props = "nested2Props";
  console.log("App has rendered");

  return (
    <div className="App">
      <Nested1 nested1Props={nested1Props} />
      <Nested2 appState={appState} setAppState={setAppState} />
    </div>
  );
}

export default App;
