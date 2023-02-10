import { useState, useEffect } from "react";
import "./App.css";
import InputArea from "./components/input-area/input-area";
import Preview from "./components/preview/preview";
import Navbar from "./components/Navbar";
import { db } from "./utils/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

function App() {
  const [user, setUser] = useState({});

  const [data, setData] = useState({
    contactInfo: "",
    shortBio: "",
    skills: [],
    experience: [],
    education: [],
  });

  //When user changes
  useEffect(() => {
    const fetchData = async () => {
      if (user.uid) {
        const docRef = doc(db, "cvs", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) setData(docSnap.data());
        else console.log("no data");
      }
    };
    fetchData();
    console.log(data);
  }, [user]);

  function handleSaveData() {
    setDoc(doc(db, "cvs", user.uid), data);
  }

  return (
    <div className="App">
      <Navbar setUser={setUser} saveData={handleSaveData} user={user} />
      <div className="flex">
        <InputArea updateState={setData} />
        <Preview data={data} />
        <p>{console.log("render")}</p>
      </div>
    </div>
  );
}

export default App;
