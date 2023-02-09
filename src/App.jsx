import { useState } from "react";
import "./App.css";
import InputArea from "./components/input-area/input-area";
import Preview from "./components/preview/preview";
import Navbar from "./components/Navbar";
import { db } from "./utils/firebase";
import { doc, setDoc } from "firebase/firestore";

function App() {
  const [user, setUser] = useState({});

  const [data, setData] = useState({
    contactInfo: "",
    shortBio: "",
    skills: [],
    experience: [],
    education: [],
  });

  function handleSaveData() {
    setDoc(doc(db, "cvs", user.uid), data);
  }

  return (
    <div className="App">
      <Navbar setUser={setUser} user={user} saveData={handleSaveData} />
      <div className="flex">
        <InputArea updateState={setData} />
        <Preview data={data} />
      </div>
    </div>
  );
}

export default App;
