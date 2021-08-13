import * as React from 'react'
import { Link } from 'gatsby'
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
	color: red;
`

const Layout = ({ pageTitle, children }) => {
	return (
		<LayoutContainerDiv>
			<title>{pageTitle}</title>
			<nav>
				<NavLinks>
					<NavItem>
						<StyledLink to="/">Home</StyledLink>
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
