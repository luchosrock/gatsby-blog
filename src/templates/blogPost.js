import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Dump from "../components/Dump";
import { Layout } from "../components/Layout";

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { prev, next } = pageContext;
  return (
    <Layout>
      <Dump previous={prev} />
      <Dump next={next} />
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
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
