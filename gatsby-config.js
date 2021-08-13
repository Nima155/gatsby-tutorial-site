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
		{
			// setting up a source plugin with its own config
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `blog`,
				path: `${__dirname}/blog`,
			},
		},
	],
}
