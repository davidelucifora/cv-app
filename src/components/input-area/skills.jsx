import React, { useEffect } from "react";
import { useState } from "react";
import InputField from "./input-field";
import helpers from "./../helpers";

/**Let's redesign this bitch.
 *
 * Ok first of all I have some data passed down to Skills. That's the skills array
 * First thing I wanna do is to pass that to state.
 * Then I wanna loop through state and render a bunch of Input Fields with skillName and skilllevel as value
 *
 */

export default function Skills(props) {
  const [allSkills, setAllSkills] = useState([]);
  useEffect(() => {
    setAllSkills(props.data);
  }, [props.data]);

  const listInputFields = allSkills.map((skill) => {
    return <SkillInputFields skill={skill}></SkillInputFields>;
  });
  return (
    <div>
      {console.log(allSkills)}
      {listInputFields}
    </div>
  );
}

function SkillInputFields({ skill }) {
  return (
    <div className="form-group-row skill-input-row">
      <InputField
        type="text"
        name="skillName"
        label="Skill"
        placeholder="e.g. ReactJS, Sales..."
        value={skill.skillName}
      ></InputField>
      <InputField
        type="text"
        name="skillLevel"
        label="Level"
        placeholder="e.g. ReactJS, Sales..."
        value={skill.skillLevel}
      ></InputField>
      <p>{console.log(skill, "input")}</p>
    </div>
  );
}
// /* Renders Two inputs in a row to save skill name and value */

// function SkillInputFields(props) {
//   /* What happens when input are changed */
//   function handleOnChange(e) {
//     const { name, value } = e.target;
//     props.setData((prevArray) =>
//       prevArray.map((skill) => {
//         if (skill.id === props.id)
//           return {
//             ...skill,
//             [name]: value,
//           };
//         else return skill;
//       })
//     );
//   }

//   /* Deletes Skill from the allSkills Array in parent component */
//   function handleDelete(id) {
//     props.setData((prevArray) =>
//       prevArray.filter((skill) => {
//         return skill.id !== id;
//       })
//     );
//   }
//   return (
//     <div className="form-group-row skill-input-row">
//       <InputField
//         type="text"
//         name="skillName"
//         label="Skill"
//         placeholder="e.g. ReactJS, Sales..."
//         value={props.skillName}
//         handleOnChange={handleOnChange}
//       />
//       <InputField
//         type="text"
//         name="skillLevel"
//         label="Level"
//         placeholder="e.g. Good, Excellent, Basic..."
//         handleOnChange={handleOnChange}
//         value={props.skillLevel}
//       />
//       <button className="del-btn " onClick={() => handleDelete(props.id)}>
//         Delete
//       </button>
//     </div>
//   );
// }

// export default function Skills(props) {
//   /* Array of Objects will hold skills */
//   const [allSkills, setAllSkills] = useState(props.data);

//   /* Update parent's state whenever skills array changes */
//   useEffect(() => {
//     props.updateState((prevState) => ({
//       ...prevState,
//       skills: allSkills,
//     }));
//   }, [allSkills]);

//   useEffect(() => {
//     console.log(props.data);
//   }, [props.datas]);

//   /* Clicking on Add Skill will add a empty skill with a random id */
//   function handleAddSkill(e) {
//     e.preventDefault();
//     setAllSkills((prevArray) => [
//       ...prevArray,
//       { id: helpers.unid(), skillName: "", skillLevel: "" },
//     ]);
//   }

//   const listAllSkills = allSkills.map((skill) => (
//     <SkillInputFields
//       key={skill.id}
//       id={skill.id}
//       setData={setAllSkills}
//       skillName={skill.skillName}
//       skillLevel={skill.skillLevel}
//     />
//   ));
//   return (
//     <div className="input-skills">
//       <h3 className="input-area-heading">Skills</h3>
//       {listAllSkills}
//       <button
//         className="secondary-btn btn"
//         id="add-skill-btn"
//         onClick={handleAddSkill}
//       >
//         Add Skill
//       </button>
//     </div>
//   );
// }
