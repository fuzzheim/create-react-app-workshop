import React, { Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import { HelloWorldHeading } from "../HelloWorldHeading/HelloWorldHeading"

const EditableItemList = React.lazy(() => import("features/EditableItemList"))

export const Router:React.FC = () => {
    return (
        <React.Fragment>
            <Suspense fallback={ <h3>Loading…</h3>}>
                <Switch>
                    <Route exact path="/">
                        <HelloWorldHeading />
                    </Route>
                    <Route exact path="/editableitemlist">
                        <EditableItemList />
                    </Route>
                    <Route>
                        <h1>R U Lost?</h1>
                    </Route>

                </Switch>
            </Suspense>
        </React.Fragment>
    )
}

export default Router