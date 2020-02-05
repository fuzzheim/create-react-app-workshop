import React from "react"
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
		id: "counter",
		path: "/counter",
		text: "Counter"
	},
	{
		id: "itemList",
		path: "/list",
		text: "Item List"
	}
]

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<h1>React workshop</h1>
			<Nav links={LINKS} />
			<Router />
		</BrowserRouter>
	)
}

export default App
