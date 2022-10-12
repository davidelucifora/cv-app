import React from "react";
import "./preview.css";
export default function Preview(props) {
  return (
    <div className="preview-area">
      <div className="cv-box">
        <div className="cv-box-header">
          <div className="cv-box-name-title">
            <h4>{props.data.fullName}</h4>
            <p>{props.data.jobTitle}</p>
          </div>
          <div className="cv-box-contact-info">
            <p className="contact-info-lines">{props.data.phoneNumber}</p>
            <p className="contact-info-lines">{props.data.emailAddress}</p>
            <p className="contact-info-lines">{props.data.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
