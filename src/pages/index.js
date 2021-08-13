// Step 1: Import React
import * as React from 'react'

import Layout from '../components/layout'
// Step 2: Define your component

const IndexPage = () => {
	return (
		<Layout pageTitle="Home Page">
			<p>I'm making this by following the Gatsby Tutorial.</p>
		</Layout>
	)
}
// Step 3: Export your component
export default IndexPage

// gatsby automatically creates pages for react components
// that are the default export of files in the src/pages dir

// page components contain all the UI elements for a specific
// page of our site

// pages created in the src/pages dir use the name of the files
// as the route for the page

// Link is sort of like react routers, Route but...
// it starts loading a page as soon as a user hovers over that link or
// when the link is scrolled into view
// so it provides additional performance
// should only be used to navigate within your own site

// use <a> to navigate elsewhere

// gatsby also has building-block components... which are basically smaller
// reusable components
