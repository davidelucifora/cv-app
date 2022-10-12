import React from "react";
import "./preview.css";

/** Header Component */
function Header({ data }) {
  return (
    <div className="cv-box-header">
      <div className="cv-box-name-title">
        <h4>{data.fullName}</h4>
        <p>{data.jobTitle}</p>
      </div>
      <div className="cv-box-contact-info">
        <p className="contact-info-lines">{data.phoneNumber}</p>
        <p className="contact-info-lines">{data.emailAddress}</p>
        <p className="contact-info-lines">{data.location}</p>
        <p className="contact-info-lines">
          {data.linkedin && "/in/" + data.linkedin}
        </p>
        <p className="contact-info-lines">{data.website}</p>
      </div>
    </div>
  );
}
/* Short Bio Summary Component */
function ShortBio(props) {
  return (
    <div className="preview-bio">
      <h3>{props.bio && "Bio"}</h3>
      <p>{props.bio}</p>
    </div>
  );
}
export default function Preview(props) {
  const data = props.data;
  return (
    <div className="preview-area">
      <div className="cv-box">
        <Header data={data} />
        <ShortBio bio={data.shortBio} />
      </div>
    </div>
  );
}
