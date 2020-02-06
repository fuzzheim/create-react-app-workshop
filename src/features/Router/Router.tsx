import React, { Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import { HelloWorldHeading } from "features/HelloWorldHeading/HelloWorldHeading"

const EditableItemList = React.lazy(() => import("features/EditableItemList"))

export const Router: React.FC = () => {
	return (
		<React.Fragment>
			<Suspense fallback={<h3>Loading...</h3>}>
				<Switch>
					<Route exact path="/">
						<HelloWorldHeading />
					</Route>
					<Route path="/editableList">
						<EditableItemList />
					</Route>
					<Route>
						<h1>Are you lost?</h1>
					</Route>
				</Switch>
			</Suspense>
		</React.Fragment>
	)
}

export default Router

/**
 * 
			<CounterContextProvider>
				<CenteredContent>
					<ConditionalChildren>
						<DisplayList />
					</ConditionalChildren>
				</CenteredContent>
				<EditableItemList />

				<HelloWorld />
				<HelloWorldHeading />
				<Incrementor />
				<hr />
				<CenteredContent>
					<ConditionalChildren>
						<Counter
							initialValue={5}
							alertCount={(newCount) => {
								alert(newCount)
							}}
						/>
						<CounterTree initialValue={3} />
					</ConditionalChildren>
				</CenteredContent>
				<hr />
			</CounterContextProvider>
			<ItemList items={ITEM_LIST_DATA} />
 */
