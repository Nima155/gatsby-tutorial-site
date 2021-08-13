import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const LayoutContainerDiv = styled.div`
	margin: auto;
	max-width: 500px;
	font-family: sans-serif;
`
const Heading = styled.h1`
	color: rebeccapurple;
`
const NavLinks = styled.ul`
	display: flex;
	list-style: none;
	padding-left: 0;
`
const NavItem = styled.li`
	padding-right: 2rem;
`
const StyledLink = styled(Link)`
	color: black;
`
// const
const Header = styled.header`
	font-size: 3rem;
	color: gray;
	font-weight: 700;
	margin: 3rem 0;
`

const Layout = ({ pageTitle, children }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`) // building block components should query the datalayer in this way.

	return (
		<LayoutContainerDiv>
			<title>
				{' '}
				{pageTitle} | {data.site.siteMetadata.title}
			</title>
			<Header>{data.site.siteMetadata.title}</Header>
			<nav>
				<NavLinks>
					<NavItem>
						<StyledLink to="/">Home</StyledLink>
					</NavItem>
					<NavItem>
						<StyledLink to="/blog">Blog</StyledLink>
					</NavItem>
					<NavItem>
						<StyledLink to="/about">About</StyledLink>
					</NavItem>
				</NavLinks>
			</nav>
			<main>
				<Heading>{pageTitle}</Heading>
				{children}
			</main>
		</LayoutContainerDiv>
	)
}
export default Layout
