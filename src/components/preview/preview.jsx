import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import "./preview.css";

// Create styles for PDF Viewer
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    width: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    height: "10%",
    alignItems: "center",
    backgroundColor: "#f2614a",
    width: "100%",
    color: "white",
    textAlign: "left",
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

const CVPdf = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text>{data.contactInfo.emailAddress}</Text>
        </View>
      </Page>
    </Document>
  );
};
export default function Preview(props) {
  return (
    <PDFViewer style={styles.viewer} showToolbar={false}>
      <CVPdf data={props.data} />
    </PDFViewer>
  );
}

/**Ok let's refactor this biiitch.
 * We need a structure like this
 * page(s)
 *  - cv-box
 *  - Do I wanna keep Header in all pages? (can actually let user choose)
 *
 * Now there can be more than one page. But the first page displays the header, short bio, skills and Education / experience
 * then extra pages are there just in case the content is longer than it should and will display only that extra content
 * how tho?
 *
 * OK then I guess we need a page component and an array of pages state within xp
 *
 * Keep in state: number of pages, data obv, current page(?), content height on current page, height of current page
 * each page will have a class of Cv-box
 * and they'll be stored in an array
 * where the first element of the array contains header etc
 * and all the rest, get displayed
 * Now, how to put the content in the new pages?
 *
 *
 */

/** Header Component */
// function Header({ data }) {
//   return (
//     <div className="cv-box-header">
//       <div className="cv-box-name-title">
//         <h4>{data.contactInfo.fullName}</h4>
//         <p>{data.contactInfo.jobTitle}</p>
//       </div>
//       <div className="cv-box-contact-info">
//         <p className="contact-info-lines">{data.contactInfo.phoneNumber}</p>
//         <p className="contact-info-lines">
//           <a href={"mailto:" + data.contactInfo.emailAddress}>
//             {data.contactInfo.emailAddress}
//           </a>
//         </p>
//         <p className="contact-info-lines">
//           <a href={"https://linkedin.com/" + data.contactInfo.linkedin}>
//             {data.contactInfo.linkedin && "/in/" + data.contactInfo.linkedin}
//           </a>
//         </p>
//         <p className="contact-info-lines">
//           <a href={data.contactInfo.website}>{data.contactInfo.website}</a>
//         </p>
//         <p className="contact-info-lines">{data.contactInfo.location}</p>
//       </div>
//     </div>
//   );
// }
// /* Short Bio Summary Component */
// function ShortBio(props) {
//   return (
//     <div className="preview-bio">
//       <h3>{props.bio && "Bio"}</h3>
//       <p>{props.bio}</p>
//     </div>
//   );
// }

// /* Component that displays Skills */
// function Skills(props) {
//   const listSkills = props.data.map((skill) => {
//     if (skill.skillName || skill.skillLevel)
//       return (
//         <li classList="preview-skill-row">
//           <span className="preview-skill-name">{skill.skillName}</span>
//           <span className="preview-skill-value">{skill.skillLevel}</span>
//         </li>
//       );
//   });

//   return (
//     <div className={`preview-skills ${props.data.length && "show"}`}>
//       <h3>Skills</h3>
//       <ul className="ul-skills">{listSkills}</ul>
//     </div>
//   );
// }

// /** Display Experiences and Education */
// function Experience(props) {
//   const listXP = props.data.map((xp) => {
//     return (
//       <div className="xp-block">
//         <div className="xp-flex-row">
//           <h5 className="xp-title">{xp.jobTitle}</h5>
//         </div>

//         <p>{xp.company}</p>
//         <p className="preview-xp-time">
//           {xp.startDate} - {xp.endDate}
//         </p>
//         <p className="preview-xp-time">{xp.location}</p>
//       </div>
//     );
//   });
//   return (
//     <div className="preview-experience">
//       <h3>{props.type}</h3>
//       {listXP}
//     </div>
//   );
// }

// function ExtraPage() {
//   return <div className="cv-box"></div>;
// }
// export default function Preview(props) {
//   const data = props.data;

//   const [pageRefs, setPageRefs] = useState([useRef(null)]);
//   const [pageHeight, setPageHeight] = useState(0);
//   const [extraPages, setExtraPages] = useState(0);
//   const [contentHeight, setContentHeight] = useState(0);
//   const cvBoxRef = useRef(null);

//   useEffect(() => {
//     const lastPageRef = pageRefs[pageRefs.length - 1];
//     setPageHeight(
//       lastPageRef.current.parentNode.getBoundingClientRect().height
//     );
//     setContentHeight(lastPageRef.current.scrollHeight);
//   }, [props.data]);

//   useEffect(() => {
//     setPageRefs((prevRefs) => [...prevRefs, useRef(null)]);
//     setExtraPages(extraPages + 1);
//   }, [contentHeight]);

//   const listPages = pageRefs.slice(1).map((pageRef, index) => {
//     return (
//       <div className="cv-box" ref={pageRef} key={`page-${index + 1}`}></div>
//     );
//   });

//   return (
//     <div className="preview-area">
//       <div className="cv-box" ref={pageRefs[0]}>
//         <Header data={data} />
//         <div className="bio-and-skills">
//           <ShortBio bio={data.shortBio} />
//           {<Skills data={data.skills} />}
//         </div>

//         {props.data.experience.length > 0 && (
//           <Experience data={data.experience} type="Experience" />
//         )}
//         {props.data.experience.length > 0 && (
//           <Experience data={data.education} type="Education" />
//         )}
//       </div>
//       {listPages}
//     </div>
//   );
// }
