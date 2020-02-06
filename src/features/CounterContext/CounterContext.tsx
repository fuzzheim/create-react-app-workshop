import React, { useState } from "react"

interface ICounterContextValue {
	count: number
	setCount: (newCount: number) => any
}

export const CounterContext = React.createContext<ICounterContextValue>({
	count: 0,
	setCount: () => {}
})
CounterContext.displayName = "CounterContext"

export const CounterContextProvider: React.FC = (children) => {
	const [ count, setCount ] = useState(0)

	const contextValue = {
		count,
		setCount
	}

	return <CounterContext.Provider value={contextValue}>{children}</CounterContext.Provider>
}

export default CounterContextProvider
