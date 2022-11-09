import React from "react";
import ContactInfo from "./contact-info";
import Skills from "./skills";
import Experience from "./experience";
import { inputFieldsData } from "./data";
import "./input-area.css";

function InputShortBio(props) {
  function handleOnChange(e) {
    const { name, value } = e.target;
    props.updateState((prevState) => ({
      ...prevState,
      shortBio: value,
    }));
  }
  return (
    <div className="short-bio">
      <h3 className="input-area-heading">Short Bio</h3>
      <textarea
        name="shortBio"
        label="Something about yourself"
        placeholder="E.g. After graduating I took 2 years off travelling and teaching myself coding and data science and started my journey before working at company X, where I quickly got promoted..."
        onChange={handleOnChange}
      ></textarea>
    </div>
  );
}
export default function inputArea(props) {
  return (
    <div className="input-area">
      <ContactInfo updateState={props.updateState} />
      <InputShortBio updateState={props.updateState} />
      <Skills updateState={props.updateState} />
      <Experience
        updateState={props.updateState}
        mode="experience"
        inputFieldsData={inputFieldsData.experience}
      />
      <Experience
        updateState={props.updateState}
        mode="education"
        inputFieldsData={inputFieldsData.education}
      />
      {/* <Experience
        updateState={props.updateState}
        inputFieldsData={inputFieldsData.experience}
        mode={"experience"}
        title="Experience"
      />
      <Experience
        updateState={props.updateState}
        inputFieldsData={inputFieldsData.education}
        mode={"education"}
        title="Education"
      /> */}
    </div>
  );
}
