import React, { createContext, useState } from "react"

interface ICounterContextValue {
	count: number
	setCount: (newCount: number) => any
}

export const CounterContext = createContext<ICounterContextValue>({
	count: 0,
	setCount: () => {}
})

export const CounterContextProvider: React.FC = ({ children }) => {
	const [ count, setCount ] = useState(0)

	const contextValue = {
		count: count,
		setCount: setCount
	}

	return <CounterContext.Provider value={contextValue}>{children}</CounterContext.Provider>
}

export default CounterContextProvider
