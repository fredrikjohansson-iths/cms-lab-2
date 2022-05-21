import React from "react";
import Layout from "../components/layout";
import "../style.css"

const Page = () => {
  return (
    <main>
      <Layout />
    </main>
  );
};

// export const data = graphql`
//   query pageQuery($id: String) {
//     contentfulEntry(id: { eq: $id }) {
//       description {
//         description
//       }
//     }
//   }
// `;

export default Page;
