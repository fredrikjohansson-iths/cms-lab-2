import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import "./experienceItem.css"

function ExperienceItem(props) {
  return (
    <div  className="experience-item" >
      <p>{renderRichText(props.experience.expTitle)}</p>
      <p>{props.experience.jobDescription.jobDescription}</p>
      <p>{props.experience.jobName}</p>
      <p>
        {props.experience.jobStart} - {props.experience.jobEnd}
      </p>
    </div>
  );
}

export default ExperienceItem;
