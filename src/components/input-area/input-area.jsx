import React from "react";
import InputField from "./input-field";
import "./input-area.css";
export default function inputArea() {
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
          />
          <InputField
            type="text"
            name="jobTitle"
            label="Job Title"
            placeholder="e.g. Astronaut..."
          />
        </div>
        <InputField
          type="text"
          name="emailAddress"
          label="Your email"
          placeholder="johnsmith@protonmail.com..."
        />

        <div className="form-group-row">
          <InputField
            type="tel"
            name="phoneNumber"
            label="Phone Number"
            placeholder="e.g. +44 7000000..."
          />
          <InputField
            type="text"
            name="location"
            label="Location"
            placeholder="e.g. London, Remote..."
          />
        </div>

        <div className="form-group-row">
          <InputField
            type="text"
            name="linkedin"
            label="LinkedIN"
            placeholder="/in/johnsmith"
          />
          <InputField
            type="text"
            name="website"
            label="Website"
            placeholder="e.g. www.johnsmith.com..."
          />
        </div>
      </div>
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
