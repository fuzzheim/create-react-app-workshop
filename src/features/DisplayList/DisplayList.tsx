import React, { useState, useEffect } from "react"
import DisplayListTable from "./DisplayListTable"
import DisplayListSearch from "./DisplayListSearch"
import { IDisplayListUser } from "./IDisplayListUser"
import "./DisplayList.css"

import { fetchUsers } from "../../api/fetchUsers"

const getUserList = async (setter: (users: IDisplayListUser[]) => any, clearLoading: () => any) => {
	const users = await fetchUsers()
	setter(users)
	clearLoading()
}

export const DisplayList: React.FC = () => {
	const [ searchText, setSearchText ] = useState("")
	const [ users, setUsers ] = useState<IDisplayListUser[]>([])
	const [ isLoading, setIsLoading ] = useState(true)

	useEffect(() => {
		getUserList(setUsers, () => setIsLoading(false))
	}, [])

	const normalizedSearchText = searchText.trim().toLocaleLowerCase()
	const filteredList = users.filter((user) => {
		if (normalizedSearchText === "") return true
		if (user.name.toLocaleLowerCase().indexOf(normalizedSearchText) >= 0) return true
		if (user.username.toLocaleLowerCase().indexOf(normalizedSearchText) >= 0) return true
		if (user.email.toLocaleLowerCase().indexOf(normalizedSearchText) >= 0) return true
		return false
	})

	useEffect(() => {
		document.title = `Searching for "${searchText}" (hits: ${filteredList.length})`
	}, [searchText, filteredList])
	return (
		<React.Fragment>
			{isLoading && (
				<p>
					<strong>Loading data...</strong>
				</p>
			)}
			{!isLoading && (
				<div className="DisplayList-wrapper">
					<h1>DisplayList</h1>
					<DisplayListSearch searchText={searchText} onSearchTextChange={setSearchText} />
					<DisplayListTable users={filteredList} />
				</div>
			)}
		</React.Fragment>
	)
}

export default DisplayList
