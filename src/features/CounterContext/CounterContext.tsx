import React, { useState } from "react"

interface ICounterContextValue {
	count: number
	setCount: (newCount: number) => any
}

const CounterContext = React.createContext<ICounterContextValue>({
	count: 0,
	setCount: () => {}
})
CounterContext.displayName = "CounterContext"
export const CounterContextConsumer = CounterContext.Consumer

export const CounterContextProvider: React.FC = (children) => {
	const [ count, setCount ] = useState(0)

	const contextValue = {
		count,
		setCount
	}

	return <CounterContext.Provider value={contextValue}>{children}</CounterContext.Provider>
}

export default CounterContextProvider
