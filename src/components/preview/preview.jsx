import React from "react";
import "./preview.css";
export default function Preview() {
  return (
    <div className="preview-area">
      <div className="cv-box">
        <div className="cv-box-header">
          <div className="cv-box-name-title">
            <h4>Name Surname</h4>
            <p>Job Title</p>
          </div>
          <div className="cv-box-contact-info">
            <p className="contact-info-lines">+44 7365666372</p>
            <p className="contact-info-lines">davidelucifora@gmail.com</p>
            <p className="contact-info-lines">London, UK</p>
          </div>
        </div>
      </div>
    </div>
  );
}
