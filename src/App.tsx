import React from "react"
import "App.css"

import { BrowserRouter } from "react-router-dom"
import Router from "features/Router"
import Nav, { ILink } from "features/Nav"

const LINKS: ILink[] = [
	{
		id: "home",
		path: "/",
		text: "Home"
	},
	{
		id: "editableList",
		path: "/editableList",
		text: "List"
	}
]

const App = () => (
	<BrowserRouter>
		<React.Fragment>
			<Nav links={LINKS} />
			<Router />
		</React.Fragment>
	</BrowserRouter>
)

export default App
