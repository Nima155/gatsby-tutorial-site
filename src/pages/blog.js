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
    o => our data is stored in *sources*.. a database or some file in our filesystem and etc..
    o => we can move the data in sources into the gatsby data layer by using *source plugins*
    o => we can then pull the data from the data layer by making graphQl queries.
    o => we can inspect the data layer by going to http://localhost:8000/___graphql.. GraphiQL
*/
