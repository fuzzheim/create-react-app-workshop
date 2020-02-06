import React from "react"
import "App.css"

import { HelloWorldHeading } from "features/HelloWorldHeading/HelloWorldHeading"
import { Incrementor } from "features/Incrementor/Incrementor"
import Counter from "features/Counter"
import CounterTree from "features/CounterTree"
import ItemList from "features/ItemList"
import { ITEM_LIST_DATA } from "features/ItemList/ITEM_LIST_DATA"
import HelloWorld from "features/HelloWorld"
import EditableItemList from "features/EditableItemList"
import DisplayList from "features/DisplayList"

const App = () => (
	<div className="App">
		<DisplayList />
		<EditableItemList />

		<HelloWorld />
		<HelloWorldHeading />
		<Incrementor />
		<Counter
			initialValue={5}
			alertCount={(newCount) => {
				alert(newCount)
			}}
		/>
		<CounterTree initialValue={3} />
		<ItemList items={ITEM_LIST_DATA} />
	</div>
)

export default App
