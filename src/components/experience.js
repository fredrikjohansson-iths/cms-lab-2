import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ExperienceItem from "./experienceItem";

const Experience = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulExperience {
        edges {
          node {
            id
            jobDescription {
              jobDescription
            }
            jobEnd
            jobName
            jobStart
            expTitle {
              raw
            }
          }
        }
      }
    }
  `);
  console.log(data.allContentfulExperience.edges);
  return (
    <div className="experience">
      <h2 className="section-title">Experience</h2>
      {data.allContentfulExperience.edges.map((exp) => {
        return <ExperienceItem key={exp.node.id} experience={exp.node} />;
      })}
    </div>
  );
};

export default Experience;
