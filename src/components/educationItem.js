import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import "./educationItem.css";

function EducationItem(props) {
  return (
    <div className="container-education-item education-item">
      <div className="education-text">
        <p className="item-label">Course</p>
        <p>{props.education.courseName}</p>
        <p className="item-label">Place of Education</p>
        <p>{renderRichText(props.education.school)}</p>
        <p className="item-label">Duration</p>
        <p>
          {props.education.eduStart} - {props.education.eduEnd}
        </p>
      </div>
      <div className="education-points">
        <p>{props.education.points}</p>
        <p className={`${props.points ? "hidden" : ""} item-label`}>points</p>
      </div>
    </div>
  );
}

export default EducationItem;
