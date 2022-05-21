import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Details = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulEntry {
        ... on ContentfulDetails {
          id
          email
          lastName
          firstName
          title
          phone
          avatar {
            publicUrl
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <div className="container-details">
      <h2 className="section-title">Details</h2>
      <div className="container-avatar">
        <img className="avatar" src={data.contentfulEntry.avatar.publicUrl} />
      </div>
      <div className="details-left flex-column">
        <div className="">
          <p className="label">Title</p>
          <p>{data.contentfulEntry.title}</p>
        </div>
        <div className="">
          {" "}
          <p className="label">First Name</p>
          <p>{data.contentfulEntry.firstName}</p>{" "}
        </div>
        <div className="">
          {" "}
          <p className="label">Email</p>
          <a href={data.contentfulEntry.email}>{data.contentfulEntry.email}</a>
        </div>
      </div>
      <div className="details-right flex-column">
        <div></div>
        <div className="">
          {" "}
          <p className="label">Last Name</p>
          <p>{data.contentfulEntry.lastName}</p>{" "}
        </div>

        <div className="">
          {" "}
          <p className="label">Phone</p>
          <p>{data.contentfulEntry.phone}</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Details;
