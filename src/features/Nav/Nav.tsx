import React from "react"
import { ILink } from "./ILink"
import { Link } from "react-router-dom"

interface INavProps {
	links?: ILink[]
}

export const Nav: React.FC<INavProps> = ({ links = [] }) => {
	return (
		<nav>
			<ul>
				{links.map((link) => (
					<li key={link.id}>
						<Link to={link.path}>{link.text}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Nav
