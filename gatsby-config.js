module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'Gatsby Tutorial site',
	},
	plugins: [
		// different gatsby plugins installed via npm and then put here so that we can work with them
		'gatsby-plugin-styled-components',
		'gatsby-plugin-gatsby-cloud',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			// setting up a source plugin with its own config
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `blog`,
				path: `${__dirname}/blog`,
			},
		},
		// A transformer plugin.. takes nodes created by a source plugin and converts them into new nodes with more useful content.
		// however, it does not modify the source nodes.. so they're still there
		'gatsby-plugin-mdx', // mdx is a markdown jsx formatter which is great for blog posts and things alike
		// https://mdxjs.com/table-of-components => more on markdown
		// This mdx plugin also allows for Frontmatter which could contain meta information about say a blog
		/* 
			This is a *frontmatter*. It goes at the top of our mdx file
			---  
			name: "Fun Facts about Red Pandas"
			datePublished: "2021-07-12"
			author: "#1 Red Panda Fan"
			---

			This plugin adds allMdx and mdx to the available graphQL queries in the datalayer. We can use these fields to access the contents of our mdx files
		*/
		// Also look into *remarks*, which can add additional features to our markdown
		// https://remark.js.org/ 	https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#gatsby-remark-plugins
		/*
					PRO TIP: transformer plugins add a reference to the original source plugin node in a field named parent..
		  allMdx {
			nodes {
				parent {
					... on File {
					modifiedTime(formatString: "MMMM D, YYYY")
					}
				}
			}
		}
		*/
	],
}
