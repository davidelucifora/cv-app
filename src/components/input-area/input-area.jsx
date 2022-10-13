import React from "react";
import ContactInfo from "./contact-info";
import "./input-area.css";
export default function inputArea(props) {
  return (
    <div className="input-area">
      <ContactInfo updateState={props.updateState} />
      <div className="short-bio">
        <h3 className="input-area-heading">Short Bio</h3>

        <textarea
          name="shortBio"
          label="Something about yourself"
          placeholder="E.g. After graduating I took 2 years off travelling and teaching myself coding and data science and started my journey before working at company X, where I quickly got promoted..."
        ></textarea>
      </div>
    </div>
  );
}
