import React from "react"

interface IDisplayListSearchProps {
	searchText: string
	onSearchTextChange: (newSearchText: string) => any
}

export const DisplayListSearch: React.FC<IDisplayListSearchProps> = ({ searchText, onSearchTextChange }) => {
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onSearchTextChange(event.target.value)
		document.title = searchText
	}
	return <input className="DisplayListSearch width-100" type="text" placeholder="Search for users" value={searchText} onChange={onChange} />
}

export default DisplayListSearch
