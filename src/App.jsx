import { useState } from "react";
import helpers from "./components/helpers";
import "./App.css";
import InputArea from "./components/input-area/input-area";
import PreviewArea from "./components/preview/preview";

function App() {
  return (
    <div className="App">
      <InputArea />
      <PreviewArea />
    </div>
  );
}

export default App;
