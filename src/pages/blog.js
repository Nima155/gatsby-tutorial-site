import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle="My Blog Posts">
			<ul>
				{data.allFile.nodes.map((e) => (
					<li key={e.id}>{e.name}</li>
				))}
			</ul>
		</Layout>
	)
}

export const query = graphql`
	query {
		allFile {
			nodes {
				name
				id
			}
		}
	}
` // with page components we put the query outside of the component and then .. gatsby automatically passes
// a data prop to our component which we can use to tap into what the component returns

export default BlogPage

/* gatsby has it's own graphQL data layer
    o => Source plugins pull data from their original location into the Gatsby GraphQL data layer.
    o=>You can use the GraphiQL endpoint (localhost:8000/___graphql) to explore the data in the data layer and design GraphQL queries.
    o=>You can write GraphQL queries to pull data out of the data layer and into your React components.
        o=>To pull data into a “building block” component, use the useStaticQuery hook.
        o=>To pull data into a page component, use a page query.

*/
