import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SkillsItem from "./skillsItem";

const Skills = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulSkills {
        edges {
          node {
            id
            personality
            skillset
            driversLicense
            languages
          }
        }
      }
    }
  `);
  if (!data) {
    return;
  }
  return (
    <div className="skills">
      <h2 className="section-title">Skills</h2>
      {data.allContentfulSkills.edges.map((skill) => {
        return <SkillsItem key={skill.node.id} skills={skill.node} />;
      })}
    </div>
  );
};

export default Skills;
