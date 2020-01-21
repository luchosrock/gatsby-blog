import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Layout } from "../components/Layout";

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { prev, next } = pageContext;
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
      {prev === false ? null : (
        <>
          {prev && (
            <Link to={prev.fields.slug}>
              <p>
                <span>&lt;&lt;</span> {prev.frontmatter.title}
              </p>
            </Link>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <Link to={next.fields.slug}>
              <p>
                {next.frontmatter.title} <span>&gt;&gt;</span>
              </p>
            </Link>
          )}
        </>
      )}
    </Layout>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;
