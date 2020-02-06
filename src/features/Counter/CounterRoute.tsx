import React from "react"
import Counter from "./Counter"
import { useParams } from "react-router-dom"

interface ICounterRouteParams {
	initialCount?: string
}

export const CounterRoute: React.FC = () => {
	const { initialCount } = useParams<ICounterRouteParams>()
	const initialCountNumber = initialCount ? parseInt(initialCount) : 0
	return <Counter initialCount={initialCountNumber} />
}

export default CounterRoute
