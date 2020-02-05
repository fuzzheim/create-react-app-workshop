import React from "react"
import { Link } from "react-router-dom"
import { ILink } from "./ILink"

interface INavProps {
	links?: ILink[]
}

export const Nav: React.FC<INavProps> = ({ links = [] }) => {
	return (
		<nav>
			<ul>
				{links.map(({ id, path, text }) => (
					<li key={id}>
						<Link to={path}>{text}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Nav
