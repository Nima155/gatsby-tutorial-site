import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'
import Layout from '../../components/layout'

const BlogPost = ({ data }) => {
	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<p>{data.mdx.frontmatter.date}</p>
			<MDXRenderer>{data.mdx.body}</MDXRenderer>
		</Layout>
	)
}

export const query = graphql`
	query ($id: String) {
		# find the specific blog with a query variable
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				date(formatString: "MMMM D, YYYY")
			}
			id
			body # what MDXRenderer uses and interprets, the main content of our blog
		}
	}
`
export default BlogPost

// Gatsby’s File System Route API lets you dynamically create new pages from data
// layer nodes by naming your files with a special syntax.

//		o=> File System Routes only work on files in the src/pages directory (or subdirectories).

// 		o=> To create a new collection route, you name your file {nodeType.field}.js, where nodeType
//		is the type of node you want to create pages from, and field is the data field from that
//		node type that you want to use in the URL for that page.

// Query variables let you pass in different data values to the same GraphQL query. They can be combined with
// field arguments to get back data only about a specific node.

// Query variables can only be used in page queries.

// When you use Gatsby’s File System Route API, it automatically adds some props into the page template component for each page:
// 		o => The id for the data layer node it used to create the page.
// 		o => The field you used to create the dynamic part of the route. (In this case, the slug field.)
