import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import "./experienceItem.css";

function ExperienceItem(props) {
  return (
    <div className="experience-item">
      <p className="item-label">Job Title</p>
      {renderRichText(props.experience.expTitle)}
      <p className="item-label">Job Description</p>
      <p className="item-text" >{props.experience.jobDescription.jobDescription}</p>
      <p className="item-label">Company</p>
      <p className="item-text" >{props.experience.jobName}</p>
      <p className="item-label">Duration</p>
      <p className="item-text" >
        {props.experience.jobStart} - {props.experience.jobEnd}
      </p>
    </div>
  );
}

export default ExperienceItem;
