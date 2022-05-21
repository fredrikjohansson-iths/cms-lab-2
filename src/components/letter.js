import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";

export default function Letter() {
  const [modal, setModal] = useState();

  function handleClick() {
    setModal(!modal);
  }

  const data = useStaticQuery(graphql`
    {
      contentfulPersonalLetter {
        letter {
          raw
        }
      }
    }
  `);
  return (
    <div className="letter">
      <button onClick={handleClick} className={modal ? "hidden" : ""}>
        Read Personal Letter
      </button>
      <article className={modal ? "" : "hidden"}>
      <div><h3>Personal Letter</h3><div className="close" onClick={handleClick}>✖️</div></div>
        {renderRichText(data.contentfulPersonalLetter.letter)}
      </article>
    </div>
  );
}
