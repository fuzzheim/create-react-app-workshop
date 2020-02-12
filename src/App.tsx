import React from 'react';
//import { BrowserRouter } from "react-router-dom"
import './App.css';
import HelloWorld from "./features/HelloWorld";
//import { HelloWorldHeading } from "./features/HelloWorldHeading/HelloWorldHeading";
//import { Incrementor } from "./features/Incrementor/Incrementor";
import Counter from "./features/Counter";
//import ItemList from './features/ItemList';
import EditableItemList from './features/EditableItemList';
import DisplayList from './features/DisplayList';
import ConditionalChildren from './features/ConditionalChildren';
import CenteredContent from './features/CenteredContent';

const App = () => {
  return (
    <div className="App">
          <CenteredContent >
              <HelloWorld />
              <ConditionalChildren>     
                <DisplayList  />
              </ConditionalChildren>
            </CenteredContent>
            <EditableItemList />
          <Counter />
    </div>
  );
}

export default App;
