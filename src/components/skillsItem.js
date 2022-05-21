import React from "react";
import "./skillsItem.css";

function SkillsItem(props) {
  if (!props) {
    return;
  }
  return (
    <div>
      <p className="label">Technical Skills</p>
      <div className="container-skillset">
        <ul className="skillset-1">
          {props.skills.skillset.slice(0, 5).map((i) => {
            return <li className="skills-item  skillset"> {i} </li>;
          })}
        </ul>
        <ul className="skillset-2 skillsItem">
          {props.skills.skillset.slice(5).map((i) => {
            return <li className="skills-item  skillset"> {i} </li>;
          })}
        </ul>
      </div>
      <p className="label">Soft Values</p>
      <div className="container-skillset">
        {props.skills.personality.map((i) => {
          return <div className="skills-item soft-value"> {i} </div>;
        })}
      </div>
      <p className="label">Languages</p>
      <div>
        {props.skills.languages.map((i) => {
          return <div className="skills-item languages"> {i} </div>;
        })}
      </div>
      <p className="label">Drivers Liecense(s)</p>
      <div>
        {props.skills.driversLicense.map((i) => {
          return <div className="skills-item"> {i} </div>;
        })}
      </div>
    </div>
  );
}

export default SkillsItem;
