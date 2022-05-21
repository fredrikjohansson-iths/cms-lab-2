import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import "./educationItem.css"

function EducationItem(props) {
  return (
    <div className="container-education-item education-item">
      <div className="education-text">
        <p>{renderRichText(props.education.course)}</p>

        <p>{renderRichText(props.education.school)}</p>
        <p>
          {props.education.eduStart} - {props.education.eduEnd}
        </p>
      </div>
      <div className="education-points">
        <p>{props.education.points}</p>
      </div>
    </div>
  );
}

export default EducationItem;
