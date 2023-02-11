import React from "react";
import InputField from "./input-field";
export default function ContactInfo(props) {
  function handleOnChange(e) {
    const { name, value } = e.target;
    props.updateState((prevState) => ({
      ...prevState,
      contactInfo: {
        ...prevState.contactInfo,
        [name]: value,
      },
    }));
  }
  return (
    <div className="contact-info">
      <h3 className="input-area-heading">Contact Info</h3>
      <div className="form-group-row">
        <InputField
          type="text"
          name="fullName"
          label="Full Name"
          placeholder="e.g. John Smith..."
          value={props.data.fullName}
          handleOnChange={handleOnChange}
        />
        <InputField
          type="text"
          name="jobTitle"
          label="Job Title"
          placeholder="e.g. Astronaut..."
          value={props.data.jobTitle}
          handleOnChange={handleOnChange}
        />
      </div>
      <InputField
        type="text"
        name="emailAddress"
        label="Your email"
        placeholder="johnsmith@protonmail.com..."
        handleOnChange={handleOnChange}
        value={props.data.emailAddress}
      />

      <div className="form-group-row">
        <InputField
          type="tel"
          name="phoneNumber"
          label="Phone Number"
          placeholder="e.g. +44 7000000..."
          handleOnChange={handleOnChange}
          value={props.data.phoneNumber}
        />
        <InputField
          type="text"
          name="linkedin"
          label="LinkedIn Username"
          placeholder="e.g. johnsmith"
          handleOnChange={handleOnChange}
          value={props.data.linkedin}
        />
      </div>

      <div className="form-group-row">
        <InputField
          type="text"
          name="website"
          label="Website"
          placeholder="e.g. www.johnsmith.com..."
          handleOnChange={handleOnChange}
          value={props.data.website}
        />
        <InputField
          type="text"
          name="location"
          label="Location"
          placeholder="e.g. London, Remote..."
          handleOnChange={handleOnChange}
          value={props.data.location}
        />
      </div>
    </div>
  );
}
