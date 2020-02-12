export const fetchUsers = async () => {
	// http://jsonplaceholder.typicode.com/users
	const response = await fetch("http://jsonplaceholder.typicode.com/users")
	const users = await response.json()
	return users
}
