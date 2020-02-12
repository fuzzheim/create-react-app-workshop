import React from "react"
import { IDisplayListUser } from "./IDisplayListUser"

interface IDisplayListTableProps {
	users: IDisplayListUser[]
}

export const DisplayListTable: React.FC<IDisplayListTableProps> = ({ users }) => {
	if (users.length === 0) {
		return <p>No data</p>
	}

	return (
		<table className="DisplayListTable">
			<thead>
				<tr>
					<th className="text-centered">Id</th>
					<th>Name</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user) => (
					<tr key={user.id}>
						<td className="text-centered">{user.id}</td>
						<td>{user.name}</td>
						<td>{user.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default DisplayListTable
