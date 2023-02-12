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
        else
          setData({
            contactInfo: "",
            shortBio: "",
            skills: [],
            experience: [],
            education: [],
          });
      }
    };
    fetchData();
  }, [user]);

  async function handleSaveData(e) {
    await setDoc(doc(db, "cvs", user.uid), data).then(showDataIsSaved());

    function showDataIsSaved() {
      e.target.innerText = "Success!";
      setTimeout(() => {
        e.target.innerText = "Save Progress";
      }, 500);
    }
  }

  return (
    <div className="App">
      <Navbar setUser={setUser} saveData={handleSaveData} user={user} />
      <div className="flex">
        <InputArea updateState={setData} data={data} />
        <Preview data={data} />
        <p>{console.log("render")}</p>
      </div>
    </div>
  );
}

export default App;
