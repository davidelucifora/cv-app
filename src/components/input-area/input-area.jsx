import React from "react";
import InputField from "./input-field";
import "./input-area.css";
export default function inputArea(props) {
  function handleOnChange(e) {
    const { name, value } = e.target;
    props.updateState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="input-area">
      <div className="contact-info">
        <h3 className="input-area-heading">Contact Info</h3>
        <div className="form-group-row">
          <InputField
            type="text"
            name="fullName"
            label="Full Name"
            placeholder="e.g. John Smith..."
            handleOnChange={handleOnChange}
          />
          <InputField
            type="text"
            name="jobTitle"
            label="Job Title"
            placeholder="e.g. Astronaut..."
            handleOnChange={handleOnChange}
          />
        </div>
        <InputField
          type="text"
          name="emailAddress"
          label="Your email"
          placeholder="johnsmith@protonmail.com..."
          handleOnChange={handleOnChange}
        />

        <div className="form-group-row">
          <InputField
            type="tel"
            name="phoneNumber"
            label="Phone Number"
            placeholder="e.g. +44 7000000..."
            handleOnChange={handleOnChange}
          />
          <InputField
            type="text"
            name="location"
            label="Location"
            placeholder="e.g. London, Remote..."
            handleOnChange={handleOnChange}
          />
        </div>

        <div className="form-group-row">
          <InputField
            type="text"
            name="linkedin"
            label="LinkedIn Username"
            placeholder="e.g. johnsmith"
            handleOnChange={handleOnChange}
          />
          <InputField
            type="text"
            name="website"
            label="Website"
            placeholder="e.g. www.johnsmith.com..."
            handleOnChange={handleOnChange}
          />
        </div>
      </div>
      <div className="short-bio">
        <h3 className="input-area-heading">Short Bio</h3>
        <textarea
          name="shortBio"
          label="Something about yourself"
          placeholder="E.g. After graduating I took 2 years off travelling and teaching myself coding and data science and started my journey before working at company X, where I quickly got promoted..."
          onChange={handleOnChange}
        ></textarea>
      </div>
    </div>
  );
}
