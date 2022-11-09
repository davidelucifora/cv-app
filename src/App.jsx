import { useState } from "react";
import helpers from "./components/helpers";
import "./App.css";
import InputArea from "./components/input-area/input-area";
import Preview from "./components/preview/preview";

function App() {
  const [data, setData] = useState({
    contactInfo: "",
    shortBio: "",
    skills: [],
    experience: [],
    education: [],
  });

  return (
    <div className="App">
      <InputArea updateState={setData} />
      <Preview data={data} />
      <p>{console.log(data)}</p>
    </div>
  );
}

export default App;
