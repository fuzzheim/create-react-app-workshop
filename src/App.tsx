import React from "react"
import ItemList, { ITEM_LIST_DATA } from "features/ItemList"

const App: React.FC = () => {
	return (
		<div>
			<h1>React workshop</h1>
			<ItemList items={ITEM_LIST_DATA} />
		</div>
	)
}

export default App
