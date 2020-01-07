import { graphql } from "gatsby";
import React from "react";
import { Layout } from "../components/Layout";
import Dump from "../components/Dump";
export default ({ data }) => {
  return (
    <>
      <Dump data={data} />
      <Layout>
        {data.allMdx.nodes.map(({ frontmatter }) => (
          <>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
          </>
        ))}
      </Layout>
    </>
  );
};
export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
      }
    }
  }
`;
