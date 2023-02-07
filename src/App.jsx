import { useState } from "react";
import "./App.css";
import InputArea from "./components/input-area/input-area";
import Preview from "./components/preview/preview";
import Login from "./components/Login";

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
      <Login />
      <InputArea updateState={setData} />
      <Preview data={data} />
    </div>
  );
}

export default App;
