import React from "react";
import ContactInfo from "./contact-info";
import Skills from "./skills";
import Experience from "./experience";
import { inputFieldsData } from "./data";
import helpers from "./../helpers";
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
        value={props.data}
        placeholder="E.g. After graduating I took 2 years off travelling and teaching myself coding and data science and started my journey before working at company X, where I quickly got promoted..."
        onChange={handleOnChange}
      ></textarea>
    </div>
  );
}
export default function inputArea({ data, updateState }) {
  return (
    <div className="input-area">
      <ContactInfo updateState={updateState} data={data.contactInfo} />
      <InputShortBio updateState={updateState} data={data.shortBio} />
      <Skills updateState={updateState} data={data.skills} />
      <Experience
        updateState={updateState}
        mode="experience"
        inputFieldsData={inputFieldsData.experience}
        data={data.experience}
      />
      <Experience
        updateState={updateState}
        mode="education"
        inputFieldsData={inputFieldsData.education}
        data={data.education}
      />
    </div>
  );
}
