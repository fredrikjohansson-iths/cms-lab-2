import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import EducationItem from "./educationItem";

const Education = (props) => {
  const data = useStaticQuery(graphql`
    {
      allContentfulEducation {
        edges {
          node {
            id
            courseName
            eduEnd
            eduStart
            school {
              raw
            }
            points
          }
        }
      }
    }
  `);

  // console.log(data.allContentfulEducation.edges.map((edu)=>{
  //   return edu.node }))
  return (
    <div className="education flex-column">
      <div style={{ width: "31rem" }}>
        {" "}
        <h2 className="section-title">Education</h2>
      </div>

      {data.allContentfulEducation.edges.map((edu) => {
        var hide = false
        if (edu.node.points == null){
          hide = true
        }
        return (
          <EducationItem
            className="education-item container-education-item"
            key={edu.node.id}
            education={edu.node}
            points={hide}
          />
        );
      })}
    </div>
  );
};

export default Education;
