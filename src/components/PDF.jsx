import helpers from "./helpers";
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// Create styles for PDF Viewer
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    fontSize: "12px",
    margin: 0,
    padding: 0,
  },
  flex: { display: "flex", flexDirection: "row" },
  heading: { fontSize: "18px", fontWeight: "600", marginBottom: "8pt" },
  section: { margin: "20px" },

  // Header Styles
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "10%",
    alignItems: "center",
    backgroundColor: "#f2614a",
    width: "100%",
    color: "white",
    textAlign: "left",
    fontSize: "12px",
    padding: "12px",
    // Styles for Name section of Header
    name: {
      fontSize: "18px",
    },
    jobTitle: {
      fontSize: "14px",
    },
  },

  skillList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
  },
  skills: {
    width: "auto",
    name: { marginRight: "10px", color: "#f2614a", fontWeight: "800" },
  },
});

// Generates a PDF of the CV based on the data
export default function CVPdf({ data }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        // Header
        <View style={styles.header}>
          <View>
            <Text style={styles.header.name}>{data.contactInfo.fullName}</Text>
            <Text style={styles.header.jobTitle}>
              {data.contactInfo.jobTitle}
            </Text>
          </View>
          <View>
            <Text>{data.contactInfo.location}</Text>
            <Text>{data.contactInfo.emailAddress}</Text>
            <Text>{data.contactInfo.phoneNumber}</Text>
            <Text>/in/{data.contactInfo.linkedin}</Text>
          </View>
        </View>
        <View>
          // Display BIO
          {data.shortBio}
          <View style={[styles.section, styles.shortBio]}>
            <Text style={styles.heading}>Bio:</Text>
            <Text>{data.shortBio}</Text>
          </View>
          <View style={styles.section}>
            <View style={[styles.skillList, styles.section]}>
              // List Skills
              <Text style={styles.heading}>Skills:</Text>
              {data.skills.map((skill) => {
                return (
                  <View key={helpers.unid()}>
                    <View style={styles.skills}>
                      <Text style={styles.skills.name}>{skill.skillName}</Text>
                      <Text>{skill.skillLevel}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
          // Experience
          <View style={styles.section}>
            <Text style={[styles.heading]}>Work Experience</Text>
            {data.experience.map((xp) => {
              return (
                <View key={helpers.unid()} style={{ marginBottom: "8px" }}>
                  <Text style={[styles.skills.name, { fontSize: "16px" }]}>
                    {xp.jobTitle}
                  </Text>
                  <Text>{xp.company}</Text>
                  <Text>
                    {xp.startDate} - {xp.endDate}
                  </Text>
                  <Text>{xp.location}</Text>
                </View>
              );
            })}
          </View>
          <View style={styles.section}>
            <Text style={[styles.heading]}>Education</Text>
            {data.education.map((edu) => {
              return (
                <View key={helpers.unid()} style={{ marginBottom: "8px" }}>
                  <Text style={[styles.skills.name, { fontSize: "16px" }]}>
                    {edu.jobTitle}
                  </Text>
                  <Text>{edu.company}</Text>
                  <Text>
                    {edu.startDate} - {edu.endDate}
                  </Text>
                  <Text>{edu.location}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </Page>
    </Document>
  );
}
