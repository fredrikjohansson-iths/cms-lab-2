import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";

export default function Header() {
  const heading = useStaticQuery(graphql`
    {
      contentfulHeading {
        headPhone
        nameAndTitle {
          raw
        }
        countryText {
          raw
        }
      }
    }
  `);
  console.log(heading);
  return (
    <header className="header container-header">
      <div className="header-name-title">{renderRichText(heading.contentfulHeading.nameAndTitle)}</div>
      <div className="header-country">{renderRichText(heading.contentfulHeading.countryText)}</div>
      <div className="header-phone"><h2>{heading.contentfulHeading.headPhone}</h2></div>
    </header>
  );
}
