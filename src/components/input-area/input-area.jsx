import React from "react";
import ContactInfo from "./contact-info";
import Skills from "./skills";
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
    </div>
  );
}
