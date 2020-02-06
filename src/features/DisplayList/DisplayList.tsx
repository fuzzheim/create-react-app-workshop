import React, { useState } from "react"
import DisplayListTable from "./DisplayListTable"
import { DISPLAY_LIST_DATA } from "./DISPLAY_LIST_DATA"
import DisplayListSearch from "./DisplayListSearch"

export const DisplayList: React.FC = () => {
	const [ searchText, setSearchText ] = useState("")

	const normalizedSearchText = searchText.trim().toLocaleLowerCase()
	const filteredList = DISPLAY_LIST_DATA.filter((user) => {
		if (normalizedSearchText === "") return true
		if (user.name.toLocaleLowerCase().indexOf(normalizedSearchText) >= 0) return true
		if (user.username.toLocaleLowerCase().indexOf(normalizedSearchText) >= 0) return true
		if (user.email.toLocaleLowerCase().indexOf(normalizedSearchText) >= 0) return true
		return false
	})

	return (
		<React.Fragment>
			<DisplayListSearch searchText={searchText} onSearchTextChange={setSearchText} />
			<DisplayListTable users={filteredList} />
		</React.Fragment>
	)
}

export default DisplayList
