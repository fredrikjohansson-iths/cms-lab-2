import * as React from "react";
import "../style.css";
// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

// markup
const IndexPage = () => {
  return (
    <main className="container-main" style={pageStyles}>
      <title>CV</title>
      <div className="header container-header">
        <div className="title">
          <h1>Stig F. Johansson, Front-End Developer</h1>
        </div>
        <div className="country flex-row">
          {" "}
          <h2 className="">Sweden 🇸🇪</h2>
          <h2 className="">+46 72 586 98 62</h2>
        </div>
      </div>
      <div className="about container-about">
        {" "}
        <h2>About</h2>
        <div className="about-left flex-column">
          <p className="label">Title</p>
          <p className="my-title">Front-End Developer</p>
          <p className="label">First Name</p>
          <p className="my-firstname"> Stig F.</p>
          <p className="label">Email</p>
          <a className="my-email" href="mailto:fecket@gmail.com">
            fecket@gmail.com
          </a>
        </div>
        <div className="about-right flex-column">
          <div className="my-avatar" />
          <p className="label">Last Name</p>
          <p className="my-lastname">Johansson</p>
          <p className="label">Phone</p>
          <p className="my-phone">+46 72 586 98 62</p>
        </div>
      </div>
      <div className="experience container-experience">
        {" "}
        <div className="experience-title">
          <h2>Experience</h2>
        </div>
        <div className="experience-left flex-column">
          {" "}
          <div>
            <h3>Job Title</h3>
            <p>Description</p>
            <p>Name of Company</p>
            <p>Duration mm/yy - mm/yy</p>
          </div>
        </div>
        <div className="experience-right flex-column">
          <div>
            <h3>Job Title</h3>
            <p>Description</p>
            <p>Name of Company</p>
            <p>Duration mm/yy - mm/yy</p>
          </div>
        </div>
      </div>
      <div className="education container-education">
        {" "}
        <div className="education-title">
          <h2>Education</h2>
        </div>
        <div className="education-left flex-column">
          <div>
            <h3>Education Name</h3>
            <p>Description</p>
            <p>Name of School</p>
            <p>Duration mm/yy - mm/yy</p>
          </div>
          <div>
            <h3>Education Name</h3>
            <p>Description</p>
            <p>Name of School</p>
            <p>Duration mm/yy - mm/yy</p>
          </div>
        </div>
        <div className="education-right flex-column">
          {" "}
          <div>
            <h3>Education Name</h3>
            <p>Description</p>
            <p>Name of School</p>
            <p>Duration mm/yy - mm/yy</p>
          </div>{" "}
          <div>
            <h3>Education Name</h3>
            <p>Description</p>
            <p>Name of School</p>
            <p>Duration mm/yy - mm/yy</p>
          </div>
        </div>
      </div>
      <div className="skills container-skills flex-column">
        {" "}
        <div className="skills-title">
          <h2>Skills</h2>
        </div>
        <div className="skills-left flex-column">
          <ul>
            <li>Example</li>
            <li>Example</li>
            <li>Example</li>
            <li>Example</li>
            <li>Example</li>
          </ul>
        </div>
        <div className="skills-right flex-column">
          <ul>
            <li>Example</li>
            <li>Example</li>
            <li>Example</li>
            <li>Example</li>
            <li>Example</li>
          </ul>
        </div>
      </div>
      <div className="footer"></div>
      {/* <h1 style={headingStyles}>
				Congratulations
				<br />
				<span style={headingAccentStyles}>— you just made a Gatsby site! </span>
				<span role="img" aria-label="Party popper emojis">
					🎉🎉🎉
				</span>
			</h1>
			<p style={paragraphStyles}>
				Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
				update in real-time.{" "}
				<span role="img" aria-label="Sunglasses smiley emoji">
					😎
				</span>
			</p>
			<ul style={listStyles}>
				<li style={docLinkStyle}>
					<a
						style={linkStyle}
						href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
					>
						{docLink.text}
					</a>
				</li>
				{links.map(link => (
					<li key={link.url} style={{ ...listItemStyles, color: link.color }}>
						<span>
							<a
								style={linkStyle}
								href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
							>
								{link.text}
							</a>
							{link.badge && (
								<span style={badgeStyle} aria-label="New Badge">
									NEW!
								</span>
							)}
							<p style={descriptionStyle}>{link.description}</p>
						</span>
					</li>
				))}
			</ul>
			<img
				alt="Gatsby G Logo"
				src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
			/> */}
    </main>
  );
};

export default IndexPage;
