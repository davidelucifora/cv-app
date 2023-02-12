import React, { useEffect } from "react";
import { useState } from "react";
import InputField from "./input-field";
import helpers from "./../helpers";

/** Skills component */
export default function Skills(props) {
  const [allSkills, setAllSkills] = useState(props.data);

  useEffect(() => {
    props.updateState((prevState) => ({
      ...prevState,
      skills: allSkills,
    }));
  }, [allSkills]);

  function handleAddSkill() {
    props.updateState((prevState) => ({
      ...prevState,
      skills: [
        ...prevState.skills,
        { id: helpers.unid(), skillName: "", skillLevel: "" },
      ],
    }));
  }
  const listInputFields = props.data.map((skill) => {
    return (
      <SkillInputFields
        key={skill.id}
        skill={skill}
        setData={props.updateState}
      ></SkillInputFields>
    );
  });
  return (
    <div>
      {console.log(allSkills)}
      {listInputFields}
      <button
        id="add-skill-btn"
        className="btn secondary-btn"
        onClick={handleAddSkill}
      >
        Add Skills
      </button>
    </div>
  );
}

/** Skill Input Fields Component
 *
 *
 */
function SkillInputFields({ skill, setData }) {
  function handleOnChange(e) {
    const { name, value } = e.target;
    const selectedSkill = skill;
    setData((prevObj) => ({
      ...prevObj,
      skills: prevObj.skills.map((skill) => {
        if (skill.id === selectedSkill.id) {
          return { ...skill, [name]: value };
        } else return skill;
      }),
    }));
  }

  function handleDelete() {
    // Assign Props.skill to selected skill
    const selectedSkill = skill; //props.skill
    setData((prevObj) => ({
      ...prevObj,
      skills: prevObj.skills.filter((skill) => skill != selectedSkill),
    }));
  }
  return (
    <div className="form-group-row skill-input-row">
      <InputField
        type="text"
        name="skillName"
        label="Skill"
        placeholder="e.g. ReactJS, Sales..."
        value={skill.skillName}
        handleOnChange={handleOnChange}
      ></InputField>
      <InputField
        type="text"
        name="skillLevel"
        label="Level"
        placeholder="e.g. ReactJS, Sales..."
        value={skill.skillLevel}
        handleOnChange={handleOnChange}
      ></InputField>
      <button className="del-btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
